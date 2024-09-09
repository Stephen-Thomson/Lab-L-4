import crypto from 'crypto'
import { PublicKey, PrivateKey, Transaction, Script } from '@bsv/sdk'
import { ERR_BAD_REQUEST, ERR_INVALID_PARAMETER } from './ERR_errors'
import { stampLog, stampLogFormat } from '@babbage/sdk-ts'
import { CertifierDetails, IdentityGroup, IdentityGroupMember, TrustEvaluatorParams } from './Api/TrustTransformerApi'
import { verifyTruthy } from './verifyHelpers'
export { stampLog, stampLogFormat }

/**
 * Tests if all `bits` are set in `what`.
 * 
 * @param what value being tested for set bits.
 * @param bits union of bits to test.
 * @returns true iff all `bits` are set in `what`
 */
export function bitsAreSet(what: number, bits: number): boolean {
  return (what & bits) === bits
}

/**
 * Returns an await'able Promise that resolves in the given number of msecs.
 * @publicbody
 */
export function wait(msecs: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, msecs))
}

/**
 * @returns count cryptographically secure random bytes as Buffer
 */
export function randomBytes(count: number): Buffer {
  return crypto.randomBytes(count)
}

/**
 * @returns count cryptographically secure random bytes as hex encoded string
 */
export function randomBytesHex(count: number): string {
  return randomBytes(count).toString('hex')
}

/**
 * @returns count cryptographically secure random bytes as base64 encoded string
 */
export function randomBytesBase64(count: number): string {
  return randomBytes(count).toString('base64')
}

/**
 * @param min minimum value to return
 * @param max greater than maximum value returned
 * @returns a weakly randomized value in the range from min to less than max.
 * @throws ERR_INVALID_PARAMETER when max is less than min.
 * @publicbody
 */
export function randomMinMax(min: number, max: number): number {
  if (max < min) throw new ERR_INVALID_PARAMETER('max', `less than min (${min}). max is (${max})`)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Shuffle an array of items.
 * 
 * This is not a cryptographically strong shuffle.
 *
 * Run time is O(n)
*
 * @returns original `array` with contents shuffled
 * @publicbody
 */
export function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

/**
 * Coerce a value to Buffer if currently encoded as a string or 
 * @param val Buffer or string or number[]. If string, encoding param applies. If number[], Buffer.from constructor is used.
 * @param encoding defaults to 'hex'. Only applies to val of type string
 * @returns input val if it is a Buffer or new Buffer from string val
 * @publicbody
 */
export function asBuffer(val: Buffer | string | number[], encoding?: BufferEncoding): Buffer {
  let b: Buffer
  if (Buffer.isBuffer(val)) b = val
  else if (typeof val === 'string') b = Buffer.from(val, encoding ?? 'hex')
  else b = Buffer.from(val)
  return b
}

/**
 * Coerce a value to an encoded string if currently a Buffer or number[]
 * @param val Buffer or string or number[]. If string, encoding param applies. If number[], Buffer.from constructor is used.
 * @param encoding defaults to 'hex'
 * @returns input val if it is a string; or if number[], first converted to Buffer then as Buffer; if Buffer encoded using `encoding`
 * @publicbody
 */
export function asString(val: Buffer | string | number[], encoding?: BufferEncoding): string {
  if (Array.isArray(val)) val = Buffer.from(val)
  return Buffer.isBuffer(val) ? val.toString(encoding ?? 'hex') : val
}

/**
 * Calculate the SHA256 hash of a Buffer.
 * @returns sha256 hash of buffer contents.
 * @publicbody
 */
export function sha256Hash(buffer: Buffer): Buffer {
  return crypto.createHash('sha256').update(buffer).digest()
}

/**
 * Calculate the SHA256 hash of the SHA256 hash of a Buffer.
 * @param data is Buffer or hex encoded string
 * @returns double sha256 hash of buffer contents, byte 0 of hash first.
 * @publicbody
 */
export function doubleSha256HashLE(data: string | Buffer, encoding?: BufferEncoding): Buffer {
  return sha256Hash(sha256Hash(asBuffer(data, encoding)))
}

/**
 * Calculate the SHA256 hash of the SHA256 hash of a Buffer.
 * @param data is Buffer or hex encoded string
 * @returns reversed (big-endian) double sha256 hash of data, byte 31 of hash first.
 * @publicbody
 */
export function doubleSha256BE(data: string | Buffer, encoding?: BufferEncoding): Buffer {
  return doubleSha256HashLE(data, encoding).reverse()
}

/**
 * Returns a copy of a Buffer with byte order reversed.
 * @returns new buffer with byte order reversed.
 * @publicbody
 */
export function swapByteOrder(buffer: Buffer): Buffer {
  return Buffer.from(buffer).reverse()
}

/**
 * @param num a number value in the Uint32 value range
 * @param littleEndian true for little-endian byte order in Buffer
 * @returns four byte buffer with Uint32 number encoded
 * @publicbody
 */
export function convertUint32ToBuffer(num: number, littleEndian = true): Buffer {
  const arr = new ArrayBuffer(4)
  const view = new DataView(arr)
  view.setUint32(0, num, littleEndian) // byteOffset = 0
  return Buffer.from(arr)
}

/**
 * @param buffer four byte buffer with Uint32 number encoded
 * @param littleEndian true for little-endian byte order in Buffer
 * @returns a number value in the Uint32 value range
 * @publicbody
 */
export function convertBufferToUint32(buffer: Buffer, littleEndian = true): number {
  const arr = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength)
  const view = new DataView(arr)
  return view.getUint32(0, littleEndian)
}

/**
 * Returns the byte size required to encode number as Bitcoin VarUint
 * @publicbody
 */
export function varUintSize(val: number): 1 | 3 | 5 | 9 {
  if (val < 0) throw new ERR_BAD_REQUEST()
  return (val <= 0xfc ? 1 : val <= 0xffff ? 3 : val <= 0xffffffff ? 5 : 9)
}

/**
 * Reads a Bitcoin VarUInt from buffer at an offset.
 * 
 * Returns updated offset.
 * @publicbody
 */
export function readVarUint32LE(buffer: Buffer, offset: number): { val: number, offset: number } {
  const b0 = buffer[offset++]
  switch (b0) {
    case 0xff:
      throw new Error('Larger than Uint32 value is not supported at this time.')
    case 0xfe:
      return { val: buffer.readUint32LE(offset), offset: offset + 4 }
    case 0xfd:
      return { val: buffer.readUint16LE(offset), offset: offset + 2 }
    default:
      return { val: b0, offset }
  }
}

/**
 * Writes a Bitcoin VarUInt to a buffer at an offset.
 * 
 * Returns updated offset.
 * @publicbody
 */
export function writeVarUint32LE(val: number, buffer: Buffer, offset: number): number {
  if (val < 0) { throw new Error(`val ${val} must be a non-negative integer.`) }
  if (val <= 0xfc) {
    buffer[offset] = val
    return offset + 1
  }
  if (val <= 0xffff) {
    buffer[offset] = 0xfd
    buffer.writeUint16LE(val, offset + 1)
    return offset + 3
  }
  if (val <= 0xffffffff) {
    buffer[offset] = 0xfe
    buffer.writeUint32LE(val, offset + 1)
    return offset + 5
  }
  throw new Error('Larger than Uint32 value is not supported at this time.')
  // buffer[offset] = 0xff
  // buffer.writeBigUint64LE(val, offset + 1)
  // return offset + 9
}

/**
 * Computes merkle root from transaction hash and TSC proof data.
 *
 * Note that it is essential to confirm that the txid is the double sha256 hash of
 * the transaction.
 *
 * To prove that txid is the last transaction in its block, at every level,
 * if computed is left side, then provided must equal computed.
 *
 * Specification Reference: https://tsc.bitcoinassociation.net/standards/merkle-proof-standardised-format/
 *
 * @param index index of transaction being proven in block
 * @param txid hash of transaction being proven
 * @param nodes tip to root, proof provided intermediate hash values
 * @returns computed merkle tree root for comparison to known root.
 */
export function computeRootFromMerkleProofNodes(index: number, txid: string | Buffer, nodes: string[] | Buffer): Buffer {
  let c = asBuffer(txid)
  const nodesIsBuffer = Buffer.isBuffer(nodes)
  let level = 0
  let offset = 0
  for (; ; level++) {
    let p: Buffer
    if (nodesIsBuffer) {
      if (offset >= nodes.length) { break }
      const type = nodes[offset++]
      if (type !== 0 && type !== 1) { throw new Error(`Unsuported node type ${type}`) }
      p = type === 1 ? c : nodes.subarray(offset, offset + 32)
      if (type === 0) { offset += 32 }
    } else {
      if (level >= nodes.length) { break }
      p = nodes[level] === '*' ? c : Buffer.from(nodes[level], 'hex')
    }
    const cIsLeft = index % 2 === 0

    // Proof is invalid if computed value equals provided value and computed is right side.
    if (!cIsLeft && c.equals(p)) { return Buffer.alloc(32) }

    c = cIsLeft
      ? computeMerkleTreeParent(c, p)
      : computeMerkleTreeParent(p, c)

    index = Math.floor(index / 2)
  }
  return c
}

/**
 * Coerce the 32 byte hash value for a merkle tree parent node given its left and right child node hashes.
 * 
 * @param leftNode 32 byte hash as hex string or Buffer
 * @param rightNode 32 byte hash as hex string or Buffer
 * @publicbody
 */
export function computeMerkleTreeParent(leftNode: string | Buffer, rightNode: string | Buffer): Buffer {
  // if inputs are strings, swap endianness before concatenating
  const leftConc = Buffer.from(asBuffer(leftNode)).reverse()
  const rightConc = Buffer.from(asBuffer(rightNode)).reverse()

  // concatenate leaves
  const concat = Buffer.concat([leftConc, rightConc])

  // hash the concatenation
  const hash = doubleSha256BE(concat)

  return hash
}

/**
 * Coerce a bsv transaction encoded as a hex string, serialized Buffer, or Transaction to Transaction
 * If tx is already a Transaction, just return it.
 * @publicbody
 */
export function asBsvSdkTx(tx: string | Buffer | Transaction): Transaction {
  if (Buffer.isBuffer(tx)) {
    tx = Transaction.fromHex(asString(tx))
  } else if (typeof tx === 'string') {
    tx = Transaction.fromHex(tx)
  }
  return tx
}

/**
 * Coerce a bsv script encoded as a hex string, serialized Buffer, or Script to Script
 * If script is already a Script, just return it.
 * @publicbody
 */
export function asBsvSdkScript(script: string | Buffer | Script): Script {
  if (Buffer.isBuffer(script)) {
    script = Script.fromHex(asString(script))
  } else if (typeof script === 'string') {
    script = Script.fromHex(script)
  }
  return script
}

/**
 * @param privKey bitcoin private key in 32 byte hex string form
 * @returns @bsv/sdk PrivateKey
 */
export function asBsvSdkPrivateKey(privKey: string) : PrivateKey {
  return PrivateKey.fromString(privKey, 'hex')
}

/**
 * @param pubKey bitcoin public key in standard compressed key hex string form
 * @returns @bsv/sdk PublicKey
 */
export function asBsvSdkPublickKey(pubKey: string) : PublicKey {
  return PublicKey.fromString(pubKey)
}

/**
 * For a bitcoin transaction in hex string, Buffer or parsed Transaction form,
 * 
 * returns deduplicated array of the input's outpoint transaction hashes (txids).
 *
 * @publicbody
 */
export function getInputTxIds(tx: string | Buffer | Transaction): string[] {
  tx = asBsvSdkTx(tx)
  const txids = {}
  for (const input of tx.inputs) {
    txids[verifyTruthy(input.sourceTXID)] = true
  }
  return Object.keys(txids)
}

/**
 * Returns the Identity Key value associated with a private key.
 * @param privKey as hex encoded 32 byte value
 * @returns hex encoded Identity Key.
 */
export function identityKeyFromPrivateKey(privKey: string): string {
  const priv = PrivateKey.fromString(privKey, 'hex')
  const identityKey = priv.toPublicKey().toString()
  return identityKey
}

/**
 * returns most recent of two dates or undefined if both are null or undefined.
 * @publicbody
 */
export function maxDate(d1: Date | null | undefined, d2: Date | null | undefined): Date | undefined {
  if (d1 == null) return (d2 != null) ? d2 : undefined
  if (d2 == null) return (d1 != null) ? d1 : undefined
  return d1 > d2 ? d1 : d2
}

/**
 * returns least recent of two dates or undefined if either date is null or undefined.
 * @publicbody
 */
export function minDate(d1: Date | null | undefined, d2: Date | null | undefined): Date | undefined {
  if (d1 == null || d2 == null) return undefined
  return d1 < d2 ? d1 : d2
}

/**
 * Helper function for evaluating if an entity meets the trust threshold of the user
 * @param {object} obj all params given in an object
 * @param {object} obj.settings contains the user's setting information
 * @param {object} obj.results the results returned from a Signia lookup
 */
export function transformResultsWithTrust({ settings, certifiers, results }: TrustEvaluatorParams) {
  // Group by publicKey and sum trust points, filtering early
  const identityGroups: Record<string, IdentityGroup> = {}
  const finalResults: IdentityGroupMember[] = []
  const certifierCache: Record<string, CertifierDetails> = {}
  const trustThreshold = settings.trustThreshold

  // Group by subject and sum trust points
  results.forEach(result => {
    const { subject, certifier } = result

    if (!subject || !certifier) {
      return
    }

    // Lookup or cache certifier details
    if (!certifierCache[certifier]) {
      const certifierDetails = certifiers.find(x => x.publicKey === certifier)
      if (!certifierDetails) {
        return
      }
      certifierCache[certifier] = {
        name: certifierDetails.name,
        icon: certifierDetails.icon,
        note: certifierDetails.note,
        publicKey: certifierDetails.publicKey,
        trust: certifierDetails.trust
      }
    }

    if (!identityGroups[subject]) {
      identityGroups[subject] = { totalTrust: 0, members: [] }
    }

    // Use the cached certifier details and include it in the result
    const resultWithCertifier = {
      ...result,
      certifier: certifierCache[certifier]
    }

    // Use the cached trust value
    identityGroups[subject].totalTrust += certifierCache[certifier] ? certifierCache[certifier].trust : 0
    identityGroups[subject].members.push(resultWithCertifier)
  })

  // Filter groups by threshold and flatten
  Object.values(identityGroups).forEach(group => {
    if (group.totalTrust >= trustThreshold) {
      finalResults.push(...group.members)
    }
  })

  // Sort the final results in descending order by trust (using the cached trust values)
  finalResults.sort((a, b) => (b.certifier as CertifierDetails).trust - (a.certifier as CertifierDetails).trust)

  return finalResults
}
