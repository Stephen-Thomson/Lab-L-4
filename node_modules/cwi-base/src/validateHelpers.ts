import { Script, PublicKey, Transaction, Spend } from '@bsv/sdk'
import {
  DojoCreateTxOutputApi, DojoFeeModelApi, DojoOutputApi, DojoOutputGenerationApi,
  DojoOutputToRedeemApi, DojoSubmitDirectTransactionApi, DojoTxInputSelectionApi
} from './Api/DojoClientApi'
import {
  ERR_DOJO_INVALID_BASKET_NAME, ERR_DOJO_INVALID_CUSTOM_INSTRUCTIONS, ERR_DOJO_INVALID_NOTE, ERR_DOJO_INVALID_OUTPUT_DESCRIPTION,
  ERR_DOJO_INVALID_OUTPUT_TAG, ERR_DOJO_INVALID_PAYMAIL_HANDLE, ERR_DOJO_INVALID_REDEEM, ERR_DOJO_INVALID_SATOSHIS,
  ERR_DOJO_INVALID_SCRIPT, ERR_DOJO_INVALID_TIME, ERR_DOJO_INVALID_TX_LABEL, ERR_DOJO_INVALID_TX_RECIPIENT, 
  ERR_DOJO_UNKNOWN_FEE_MODEL
} from './ERR_DOJO_errors'
import {
  ERR_BAD_REQUEST, ERR_INVALID_PARAMETER, ERR_TXID_INVALID, ERR_UNAUTHORIZED
} from './ERR_errors'
import { asBsvSdkScript, asString, identityKeyFromPrivateKey } from './utils'
import { verifyTruthy } from './verifyHelpers'
import { CwiError } from './CwiError'
import { ScriptTemplateSABPPP } from './ScriptTemplateSABPPP'

export function validateIdentityKey (identityKey?: string | null): string {
  // First, we make sure the user has provided the required fields
  if (identityKey == null) throw new ERR_UNAUTHORIZED('User identityKey not provided!')

  // Force the incoming identityKey value to be a compressed public key...
  if (identityKey.length > 66) {
    // A compressed public key is 33 hex digits.
    const pubkey = PublicKey.fromString(identityKey)
    identityKey = pubkey.toString()
  }

  if (identityKey.length !== 66) throw new ERR_UNAUTHORIZED('User identityKey is invalid!')

  return identityKey
}

export function validateTXID (txid: string): void {
  if (typeof txid === 'string') {
    const re = /[0-9A-Fa-f]{64}/g
    if (!re.test(txid)) { throw new ERR_TXID_INVALID() }
  } else { throw new ERR_TXID_INVALID() }
}

export function validateBasketName (name: string): string {
  name = name.trim()
  if (name.length > 1000) { throw new ERR_DOJO_INVALID_BASKET_NAME() }
  return name
}

export function validateTxRecipient (recipient?: string): string | undefined {
  if (recipient === undefined) return undefined
  if (typeof recipient !== 'string' || recipient.length > 100) throw new ERR_DOJO_INVALID_TX_RECIPIENT()
  validatePaymail(recipient)
  return recipient
}

export function validateTxNote (note?: string): string | undefined {
  if (note === undefined) return undefined
  if (typeof note !== 'string' || note.length > 500) throw new ERR_DOJO_INVALID_NOTE()
  return note
}

export function validateCustomInstructions (s: string): string {
  s = s.trim()
  if (s.length > 2500) { throw new ERR_DOJO_INVALID_CUSTOM_INSTRUCTIONS() }
  return s
}

export function validateOutputDescription (s: string): string {
  s = s.trim()
  if (s.length > 255) { throw new ERR_DOJO_INVALID_OUTPUT_DESCRIPTION() }
  return s
}

export function validateCreateTxOutput (o: DojoCreateTxOutputApi): void {
  if (typeof o !== 'object') throw new ERR_BAD_REQUEST('Outputs must be objects.')
  validateSatoshis(o.satoshis)
  validateScript(o.script)
  if (o.description !== undefined) o.description = validateOutputDescription(o.description)
  if (o.basket !== undefined) o.basket = validateTxLabel(o.basket)
  if (o.customInstructions !== undefined) o.customInstructions = validateCustomInstructions(o.customInstructions)
  if (o.tags) o.tags = validateOutputTags(o.tags)
}

export function validateSecondsSinceEpoch (time: number): Date {
  const date = new Date(time * 1000)
  if (date.getTime() / 1000 !== time || time < 1600000000 || time > 100000000000) { throw new ERR_DOJO_INVALID_TIME() }
  return date
}

export function validateDate(date: Date | string | number | null | undefined) : Date | undefined {
    let r: Date | undefined = undefined
    if (date instanceof Date)
        r = date
    else if (date)
        r = new Date(date)
    return r
}

export function validateSatoshis (satoshis: number): void {
  if (!Number.isInteger(satoshis) || satoshis < 0 || satoshis > 21e14) { throw new ERR_DOJO_INVALID_SATOSHIS() }
}

export function validateScript (script: string): void {
  const re = /^([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})*$/ig
  if (typeof script !== 'string' || !re.test(script)) { throw new ERR_DOJO_INVALID_SCRIPT() }

  try {
    Script.fromHex(script)
  } catch (e) {
    throw new ERR_DOJO_INVALID_SCRIPT()
  }
}

export function validateInputSelection (v: DojoTxInputSelectionApi | undefined): DojoTxInputSelectionApi {
  let r: DojoTxInputSelectionApi
  if ((v == null) || typeof v !== 'object') {
    r = {
      disable: false,
      baskets: ['default'],
      maxUnconfirmedChainLength: -1,
      includeSending: false
    }
  } else {
    if (typeof v.disable !== 'boolean') v.disable = false
    if (typeof v.includeSending !== 'boolean') v.includeSending = false
    if (!Array.isArray(v.baskets)) v.baskets = ['default']
    if (typeof v.maxUnconfirmedChainLength !== 'number') v.maxUnconfirmedChainLength = -1
    r = {
      disable: v.baskets.length === 0 || v.disable,
      baskets: v.baskets,
      maxUnconfirmedChainLength: v.maxUnconfirmedChainLength,
      includeSending: v.includeSending
    }
  }
  return r
}

export function validateOutputGeneration (v: DojoOutputGenerationApi | undefined): DojoOutputGenerationApi {
  let r: DojoOutputGenerationApi
  if (typeof v !== 'object') {
    r = {
      basket: 'default',
      method: 'auto'
    }
  } else {
    if (typeof v.basket !== 'string') v.basket = 'default'
    if (typeof v.method !== 'string' || v.method !== 'single') v.method = 'auto'
    r = {
      basket: v.basket,
      method: v.method
    }
  }
  return r
}

export function validateTxLabel (label: string): string {
  label = label.trim()
  if (label.length > 150) { throw new ERR_DOJO_INVALID_TX_LABEL() }
  return label
}

export function validateTxLabels (v?: string[]): string[] {
  const r: string[] = []
  if (typeof v !== 'undefined') {
    if (!Array.isArray(v)) throw new ERR_BAD_REQUEST('Transaction labels must be an array')
    if (v.length > 30) throw new ERR_BAD_REQUEST('No more than 30 labels per transaction are allowed')
    if (new Set(v).size !== v.length) throw new ERR_BAD_REQUEST('Duplicate transaction labels are not allowed')
    for (let i = 0; i < v.length; i++) { r[i] = validateTxLabel(v[i]) }
  }
  return r
}

export function validateOutputTag (tag: string): string {
  tag = tag.trim()
  if (tag.length > 150) { throw new ERR_DOJO_INVALID_OUTPUT_TAG() }
  return tag
}

export function validateOutputTags (v?: string[]): string[] {
  const r: string[] = []
  if (typeof v !== 'undefined') {
    if (!Array.isArray(v)) throw new ERR_BAD_REQUEST('Output tags must be an array')
    if (v.length > 30) throw new ERR_BAD_REQUEST('No more than 30 tags per output are allowed')
    if (new Set(v).size !== v.length) throw new ERR_BAD_REQUEST('Duplicate output tags are not allowed')
    for (let i = 0; i < v.length; i++) { r[i] = validateOutputTag(v[i]) }
  }
  return r
}

export function validateFeeModel (v?: DojoFeeModelApi): DojoFeeModelApi {
  const r: DojoFeeModelApi = {
    model: 'sat/kb',
    value: 110
  }
  if (typeof v === 'object') {
    if (v.model !== 'sat/kb') throw new ERR_DOJO_UNKNOWN_FEE_MODEL(v.model)
    if (typeof v.value === 'number') { r.value = v.value }
  }
  return r
}

export function validateOutputToRedeem (output: DojoOutputToRedeemApi): void {
  if (typeof output.index !== 'number') { throw new ERR_DOJO_INVALID_REDEEM('index property is missing or invalid') }
  if (typeof output.unlockingScriptLength !== 'number') { throw new ERR_DOJO_INVALID_REDEEM('unlockingScriptLength property is missing or invalid') }
}

export function validatePaymail (paymailHandle: string | null): void {
  if (paymailHandle == null) throw new ERR_DOJO_INVALID_PAYMAIL_HANDLE('The paymail handle cannot be null.')
  if (typeof paymailHandle !== 'string') throw new ERR_DOJO_INVALID_PAYMAIL_HANDLE('The paymail handle must be a string.')
  const re = /^(([a-zA-Z0-9._-]+)@([a-zA-Z0-9]+)(\.|:)([a-zA-Z0-9]+))$/g
  if (!re.test(paymailHandle) || paymailHandle.length > 128) { throw new ERR_DOJO_INVALID_PAYMAIL_HANDLE('The paymail handle must follow e-mail address formatting rules and not be longer than 128 characters.') }
}

export function validateSABPPPTransaction (transaction: DojoSubmitDirectTransactionApi): DojoSubmitDirectTransactionApi {
  if (typeof transaction !== 'object') throw new ERR_INVALID_PARAMETER('transaction', 'an object')
  if (!Array.isArray(transaction.outputs)) throw new ERR_INVALID_PARAMETER('transaction.outputs', 'an array')
  if (transaction.outputs.length < 1) throw new ERR_INVALID_PARAMETER('transaction.outputs', 'of length greater than zero')
  if (!transaction.outputs.every(x =>
    typeof x === 'object' &&
        typeof x.derivationSuffix === 'string'
  )) throw new ERR_INVALID_PARAMETER('transaction.outputs', 'have derivationSuffix')

  return transaction
}

export function validateSubmitDirectCustomTransaction (transaction: DojoSubmitDirectTransactionApi): DojoSubmitDirectTransactionApi {
  if (typeof transaction !== 'object') throw new ERR_INVALID_PARAMETER('transaction', 'an object')
  if (!Array.isArray(transaction.outputs)) throw new ERR_INVALID_PARAMETER('transaction.outputs', 'an array')
  if (transaction.outputs.length < 1) throw new ERR_INVALID_PARAMETER('transaction.outputs', 'of length greater than zero')
  if (!transaction.outputs.every(x =>
    typeof x === 'object' &&
        typeof x.customInstructions === 'string' &&
        typeof x.basket === 'string' && x.basket !== 'default'
  )) throw new ERR_INVALID_PARAMETER('transaction.outputs', 'have customInstructions and valid basket other than "default"')

  return transaction
}

export function validateUnlockScriptWithBsvSdk(
    spendingTx: Transaction | number[] | Buffer | string,
    vin: number,
    lockingScript: Script | number[] | Buffer | string,
    amount: number
)
: boolean
{
  if (typeof spendingTx === "string" || Array.isArray(spendingTx) || Buffer.isBuffer(spendingTx))
    spendingTx = Transaction.fromHex(asString(spendingTx))
  if (typeof lockingScript === "string" || Array.isArray(lockingScript) || Buffer.isBuffer(lockingScript))
    lockingScript = Script.fromHex(asString(lockingScript))

  const input = spendingTx.inputs[vin]
  const sourceTXID = verifyTruthy(input.sourceTXID ? input.sourceTXID : input.sourceTransaction?.id("hex") as string)

  const spend = new Spend({
    sourceTXID,
    sourceOutputIndex: input.sourceOutputIndex,
    sourceSatoshis: amount,
    lockingScript,
    transactionVersion: spendingTx.version,
    otherInputs: spendingTx.inputs.filter((v, i) => i !== vin),
    inputIndex: vin,
    unlockingScript: verifyTruthy(input.unlockingScript),
    outputs: spendingTx.outputs,
    inputSequence: input.sequence,
    lockTime: spendingTx.lockTime
  })

  const valid = spend.validate()
  return valid
}

export async function validateUnlockScriptOfChangeOutput(output: DojoOutputApi, privateKey: string)
: Promise<CwiError | undefined>
{
    try {
        const sourceTXID = verifyTruthy(output.txid)
        const sourceOutputIndex = verifyTruthy(output.vout)
        const lockingScript = asString(verifyTruthy(output.outputScript))
        const satoshis = verifyTruthy(output.amount)
        const derivationPrefix = verifyTruthy(output.derivationPrefix)
        const derivationSuffix = verifyTruthy(output.derivationSuffix)

        const publicKey = output.senderIdentityKey || identityKeyFromPrivateKey(privateKey)

        const sabppp = new ScriptTemplateSABPPP({ derivationPrefix, derivationSuffix })

        const unlockingScriptTemplate = sabppp.unlock(
            privateKey,
            publicKey,
            satoshis,
            asBsvSdkScript(lockingScript)
        )

        const tx = new Transaction()
        tx.addInput({
            sourceTXID,
            unlockingScriptTemplate,
            sourceOutputIndex,
            sequence: 0xffffffff
        })

        await tx.sign()

        const ok = validateUnlockScriptWithBsvSdk(tx, 0, asBsvSdkScript(lockingScript), satoshis)

        if (!ok) return new ERR_INVALID_PARAMETER("test unlock failed")

        return undefined

    } catch (eu: unknown) {
        const e = CwiError.fromUnknown(eu)
        return e
    }
}