import { varUintSize, sha256Hash, ERR_INTERNAL, DojoUserStateApi, validateDate, DojoEntityTimeStampApi } from '.'
import { BigNumber, Curve, P2PKH, PrivateKey, PublicKey } from '@bsv/sdk'

/**
 * @param scriptSize byte length of input script
 * @returns serialized byte length a transaction input
 */
export function transactionInputSize (scriptSize: number): number {
  return 32 + // txid
        4 + // vout
        varUintSize(scriptSize) + // script length, this is already in bytes
        scriptSize + // script
        4 // sequence number
}

/**
 * @param scriptSize byte length of output script
 * @returns serialized byte length a transaction output
 */
export function transactionOutputSize (scriptSize: number): number {
  return varUintSize(scriptSize) + // output script length, from script encoded as hex string
        scriptSize + // output script
        8 // output amount (satoshis)
}

/**
 * Compute the serialized binary transaction size in bytes
 * given the number of inputs and outputs,
 * and the size of each script.
 * @param inputs array of input script lengths, in bytes
 * @param outputs array of output script lengths, in bytes
 * @returns total transaction size in bytes
 */
export function transactionSize (inputs: number[], outputs: number[]): number {
  return 4 + // Version
        varUintSize(inputs.length) + // Number of inputs
        inputs.reduce((a, e) => a + transactionInputSize(e), 0) + // all inputs
        varUintSize(outputs.length) + // Number of outputs
        outputs.reduce((a, e) => a + transactionOutputSize(e), 0) + // all outputs
        4 // lock time
}

function keyOffsetToHashedSecret (pub: PublicKey, keyOffset?: string): { hashedSecret: BigNumber, keyOffset: string } {
  let offset: PrivateKey
  if (keyOffset !== undefined && typeof keyOffset === 'string') {
    if (keyOffset.length === 64)
      offset = PrivateKey.fromString(keyOffset, 'hex')
    else
      offset = PrivateKey.fromWif(keyOffset)
  } else {
    offset = PrivateKey.fromRandom()
    keyOffset = offset.toWif()
  }

  const sharedSecret = Buffer.from(pub.mul(offset).encode(true, undefined) as number[])

  const hashedSecret = sha256Hash(sharedSecret)

  return { hashedSecret: new BigNumber(Array.from(hashedSecret)), keyOffset }
}

export function offsetPrivKey (privKey: string, keyOffset?: string): { offsetPrivKey: string, keyOffset: string } {
  const priv = PrivateKey.fromWif(privKey)

  const pub = priv.toPublicKey()

  const r = keyOffsetToHashedSecret(pub, keyOffset)

  const bn = priv.add(r.hashedSecret).mod(new Curve().n)

  const offsetPrivKey = new PrivateKey(bn).toWif()

  return { offsetPrivKey, keyOffset: r.keyOffset }
}

export function offsetPubKey (pubKey: string, keyOffset?: string): { offsetPubKey: string, keyOffset: string } {
  const pub = PublicKey.fromString(pubKey)

  const r = keyOffsetToHashedSecret(pub, keyOffset)

  // The hashed secret is multiplied by the generator point.
  const point = new Curve().g.mul(r.hashedSecret)

  // The resulting point is added to the recipient public key.
  const offsetPubKey = new PublicKey(pub.add(point))

  return { offsetPubKey: offsetPubKey.toString(), keyOffset: r.keyOffset }
}

export function lockScriptWithKeyOffsetFromPubKey (pubKey: string, keyOffset?: string): { script: string, keyOffset: string } {
  const r = offsetPubKey(pubKey, keyOffset)

  const offsetPub = PublicKey.fromString(r.offsetPubKey)

  const hash = offsetPub.toHash() as number[]

  const script = new P2PKH().lock(hash).toHex()

  return { script, keyOffset: r.keyOffset }
}

export function createBabbageServiceChargeOutput (fee = 200):
{
  script: string
  satoshis: number
  keyOffset: string
} {
  // Derive a new public key to use for each commission to increase privacy
  const BABBAGE_PUBLIC_KEY_HEX = '0397742eaef6c7f08c4aa057397d45529f93ab90345b84ce5a5aac06ea9cdd132e'

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { script, keyOffset } = lockScriptWithKeyOffsetFromPubKey(BABBAGE_PUBLIC_KEY_HEX)

  return {
    script,
    satoshis: fee,
    keyOffset
  }
}

/**
 * Buffers sent across HTTP may not be restored correctly.
 *
 * Detect these situations and restore and Buffers.
 */
export function verifyBufferOrObject(v: Buffer | object): Buffer {
  if (Buffer.isBuffer(v)) return v
  if ('type' in v && v.type === 'Buffer' && 'data' in v && Array.isArray(v.data)) {
    return Buffer.from(v.data)
  }
  throw new ERR_INTERNAL('Unexpected buffer encoding')
}

export function verifyBufferOrObjectOrNull(v: Buffer | object | null): Buffer | null {
  if (v == null) return null
  return verifyBufferOrObject(v)
}

export function verifyBufferOrObjectOrUndefined(v: Buffer | object | undefined): Buffer | undefined {
  if (v == null) return undefined
  return verifyBufferOrObject(v)
}

/**
 * Entities sent across HTTP may not have Date and Buffer properties restored correctly.
 *
 * Detect these situations and restore contained values as Dates and Buffers.
 */
export function restoreUserStateEntities (state: DojoUserStateApi): void {
  state.user.created_at = validateDate(state.user.created_at)
  state.user.updated_at = validateDate(state.user.updated_at)

  // Run through entities with timestamps (ewts) to make sure they are Dates, not strings.
  const ewts: DojoEntityTimeStampApi[][] = [
    state.baskets, state.certificateFields, state.certificates, state.commissions, state.mapiResponses,
    state.outputs, state.provenTxReqs, state.provenTxs, state.txLabelMaps, state.txLabels, state.txs
  ]

  for (const ewt of ewts) {
    for (let i = 0; i < ewt.length; i++) {
      const ei = ewt[i]
      ei.created_at = validateDate(ei.created_at)
      ei.updated_at = validateDate(ei.updated_at)
    }
  }

  for (let i = 0; i < state.provenTxs.length; i++) {
    /**
         * entityIn: The incoming entity from state being merged.
         */
    const ei = state.provenTxs[i]
    ei.nodes = verifyBufferOrObject(ei.nodes)
    ei.rawTx = verifyBufferOrObject(ei.rawTx)
    ei.blockHash = verifyBufferOrObject(ei.blockHash)
    ei.merkleRoot = verifyBufferOrObject(ei.merkleRoot)
  }

  for (let i = 0; i < state.provenTxReqs.length; i++) {
    const ei = state.provenTxReqs[i]
    ei.rawTx = verifyBufferOrObjectOrUndefined(ei.rawTx)
  }

  for (let i = 0; i < state.txs.length; i++) {
    const ei = state.txs[i]
    ei.rawTransaction = verifyBufferOrObjectOrNull(ei.rawTransaction)
  }

  for (let i = 0; i < state.commissions.length; i++) {
    const ei = state.commissions[i]
    ei.outputScript = verifyBufferOrObjectOrNull(ei.outputScript)
  }

  for (let i = 0; i < state.outputs.length; i++) {
    const ei = state.outputs[i]
    ei.outputScript = verifyBufferOrObjectOrNull(ei.outputScript)
  }
}
