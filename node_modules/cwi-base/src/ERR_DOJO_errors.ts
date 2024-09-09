import { OutPoint } from '@babbage/sdk-ts'
import { DojoSyncStatus } from './Api/DojoClientApi'
import { CwiError } from './CwiError'
import { asString } from './utils'

/**
 * Transaction amount is not correct!
 */
export class ERR_DOJO_TX_BAD_AMOUNT extends CwiError { constructor (description?: string) { super('ERR_DOJO_TX_BAD_AMOUNT', description ?? 'Transaction amount is not correct!') } }

/**
 * Not sufficient funds in the available inputs to cover the cost of the required outputs
 * and the transaction fee (${moreSatoshisNeeded} more satoshis are needed,
 * for a total of ${totalSatoshisNeeded}), plus whatever would be required in order
 * to pay the fee to unlock and spend the outputs used to provide the additional satoshis.
 */
export class ERR_DOJO_NOT_SUFFICIENT_FUNDS extends CwiError {
  constructor (public totalSatoshisNeeded: number, public moreSatoshisNeeded: number) {
    super('ERR_DOJO_NOT_SUFFICIENT_FUNDS', `Not sufficient funds in the available inputs to cover the cost of the required outputs and the transaction fee (${moreSatoshisNeeded} more satoshis are needed, for a total of ${totalSatoshisNeeded}), plus whatever would be required in order to pay the fee to unlock and spend the outputs used to provide the additional satoshis.`)
  }
}

/**
 * Not sufficient funds in the available inputs to cover the cost of the required outputs
 * and the transaction fee (${moreSatoshisNeeded} more satoshis are needed,
 * for a total of ${totalSatoshisNeeded}), plus whatever would be required in order
 * to pay the fee to unlock and spend the outputs used to provide the additional satoshis.
 * 
 * Accepted funds require at least one transaction processor has accepted broacast of transaction containing each UTXO.
 */
export class ERR_DOJO_NOT_SUFFICIENT_ACCEPTED_FUNDS extends CwiError {
  constructor (public totalSatoshisNeeded: number, public moreSatoshisNeeded: number) {
    super('ERR_DOJO_NOT_SUFFICIENT_PROVEN_FUNDS', `Not sufficient funds in the available inputs to cover the cost of the required outputs and the transaction fee (${moreSatoshisNeeded} more satoshis are needed, for a total of ${totalSatoshisNeeded}), plus whatever would be required in order to pay the fee to unlock and spend the outputs used to provide the additional satoshis.`)
  }
}

/**
 * Not sufficient funds in the available inputs to cover the cost of the required outputs
 * and the transaction fee (${moreSatoshisNeeded} more satoshis are needed,
 * for a total of ${totalSatoshisNeeded}), plus whatever would be required in order
 * to pay the fee to unlock and spend the outputs used to provide the additional satoshis.
 * 
 * Proven funds require valid merkle proofs for each UTXO.
 */
export class ERR_DOJO_NOT_SUFFICIENT_PROVEN_FUNDS extends CwiError {
  constructor (public totalSatoshisNeeded: number, public moreSatoshisNeeded: number) {
    super('ERR_DOJO_NOT_SUFFICIENT_PROVEN_FUNDS', `Not sufficient funds in the available inputs to cover the cost of the required outputs and the transaction fee (${moreSatoshisNeeded} more satoshis are needed, for a total of ${totalSatoshisNeeded}), plus whatever would be required in order to pay the fee to unlock and spend the outputs used to provide the additional satoshis.`)
  }
}

/**
 * Transaction was already broadcast.
 */
export class ERR_DOJO_UNKNOWN_FEE_MODEL extends CwiError { constructor (model: string) { super('ERR_DOJO_UNKNOWN_FEE_MODEL', `"${model}" is not a supported fee model. Only "sat/kb" is a supported at this time. Please email dojo-fee-models@babbage.systems if you have a new fee model which you would like Dojo to support.`) } }
/**
 * Transaction was already broadcast.
 */
export class ERR_DOJO_BROADCAST_DUPE extends CwiError { constructor () { super('ERR_DOJO_BROADCAST_DUPE', 'Transaction was already broadcast.') } }
/**
 * Certificate already exists.
 */
export class ERR_DOJO_CERT_DUPE extends CwiError { constructor () { super('ERR_DOJO_CERT_DUPE', 'Certificate already exists.') } }
/**
 * Certificate signature is invalid.
 */
export class ERR_DOJO_CERT_INVALID extends CwiError { constructor () { super('ERR_DOJO_CERT_INVALID', 'Certificate signature is invalid.') } }
/**
 * Certificate subject must match authenticated user's identityKey.
 */
export class ERR_DOJO_CERT_SUBJECT extends CwiError { constructor () { super('ERR_DOJO_CERT_SUBJECT', "Certificate subject must match authenticated user's identityKey.") } }

/**
 * Transaction must have at least one input and output.
 */
export class ERR_DOJO_CREATE_TX_EMPTY extends CwiError { constructor () { super('ERR_DOJO_CREATE_TX_EMPTY', 'Transaction must have at least one input and output.') } }

/**
 * outputToRedeem is invalid
 */
export class ERR_DOJO_NOSENDCHANGE extends CwiError { constructor (description: string | OutPoint) { super('ERR_DOJO_NOSENDCHANGE', typeof description === 'string' ? description : `Invalid noSendChange outpoint ${description}`) } }

/**
 * outputToRedeem is invalid
 */
export class ERR_DOJO_INVALID_REDEEM extends CwiError { constructor (description?: string) { super('ERR_DOJO_INVALID_REDEEM', description ?? 'outputToRedeem is invalid') } }

/**
 * Output customInstruction must be a string or length not more than 2500.
 */
export class ERR_DOJO_INVALID_CUSTOM_INSTRUCTIONS extends CwiError { constructor () { super('ERR_DOJO_INVALID_CUSTOM_INSTRUCTIONS', 'Output customInstruction must be a string or length not more than 2500.') } }

/**
 * The outpoint (txid and vout combination) does not belong to a transaction known by this user of the server.
 */
export class ERR_DOJO_INVALID_OUTPOINT extends CwiError { constructor () { super('ERR_DOJO_INVALID_OUTPOINT', 'The outpoint (txid and vout combination) does not belong to a transaction known by this user of the server.') } }
/**
 * Output description must be a string or length not more than 255.
 */
export class ERR_DOJO_INVALID_OUTPUT_DESCRIPTION extends CwiError { constructor () { super('ERR_DOJO_INVALID_OUTPUT_DESCRIPTION', 'Output description must be a string or length not more than 255.') } }
/**
 * The paymail handle is invalid.
 */
export class ERR_DOJO_INVALID_PAYMAIL_HANDLE extends CwiError { constructor (description?: string) { super('ERR_DOJO_INVALID_PAYMAIL_HANDLE', description ?? 'The paymail handle is invalid') } }
/**
 * This server is not accepting registrations for new Paymail handles under the specified domain name.
 */
export class ERR_DOJO_INVALID_PAYMAIL_DOMAIN extends CwiError { constructor () { super('ERR_DOJO_INVALID_PAYMAIL_DOMAIN', 'This server is not accepting registrations for new Paymail handles under the specified domain name.') } }
/**
 * The transaction note is invalid.
 */
export class ERR_DOJO_INVALID_NOTE extends CwiError { constructor () { super('ERR_DOJO_INVALID_NOTE', 'The transaction note is invalid. Length limit is 500.') } }
/**
 * The transaction reference is invalid.
 */
export class ERR_DOJO_INVALID_REFERENCE extends CwiError { constructor (reference?: string) { super('ERR_DOJO_INVALID_REFERENCE', `The transaction reference (${reference ?? ''}) is invalid.`) } }
/**
 * An amount of satoshis must be a non-negative integer less than 21e14.
 */
export class ERR_DOJO_INVALID_SATOSHIS extends CwiError { constructor () { super('ERR_DOJO_INVALID_SATOSHIS', 'An amount of satoshis must be a non-negative integer less than 21e14.') } }
/**
 * Script must be a valid Bitcoin script.
 */
export class ERR_DOJO_INVALID_SCRIPT extends CwiError { constructor (description?: string) { super('ERR_DOJO_INVALID_SCRIPT', description ?? 'Script must be a valid Bitcoin script.') } }
/**
 * Time values must be integer number of seconds since the epoch.
 */
export class ERR_DOJO_INVALID_TIME extends CwiError { constructor () { super('ERR_DOJO_INVALID_TIME', 'Time values must be integer number of seconds since the epoch.') } }
/**
 * The status of this transaction is ${stat}, which is not compatible with this operation. The transaction was not broadcasted by the recipient.
 */
export class ERR_DOJO_INVALID_TRANSACTION_STATUS extends CwiError { constructor (stat: string) { super('ERR_DOJO_INVALID_TRANSACTION_STATUS', `The status of this transaction is ${stat}, which is not compatible with this operation. The transaction was not broadcasted by the recipient.`) } }

/**
 * Basket names must have one visible character and not more than 1000.
 */
export class ERR_DOJO_INVALID_BASKET_NAME extends CwiError { constructor () { super('ERR_DOJO_INVALID_BASKET_NAME', 'Basket names must have one visible character and not more than 1000.') } }

/**
 * Basket names must have one visible character and not more than 1000.
 */
export class ERR_DOJO_INVALID_BEEF extends CwiError { constructor (description?: string) { super('ERR_DOJO_INVALID_BEEF', description || `Invalid BEEF.`) } }

/**
 * Transaction recipient must be not more than 100.
 */
export class ERR_DOJO_INVALID_TX_RECIPIENT extends CwiError { constructor () { super('ERR_DOJO_INVALID_TX_RECIPIENT', 'Transaction recipient must be not more than 100.') } }

/**
 * Transaction labels must have one visible character and not more than 150.
 */
export class ERR_DOJO_INVALID_TX_LABEL extends CwiError { constructor () { super('ERR_DOJO_INVALID_TX_LABEL', 'Transaction labels must have one visible character and not more than 150.') } }

/**
 * Output tags must have one visible character and not more than 150.
 */
export class ERR_DOJO_INVALID_OUTPUT_TAG extends CwiError { constructor () { super('ERR_DOJO_INVALID_OUTPUT_TAG', 'Output tags must have one visible character and not more than 150.') } }

/**
 * Transaction labels must have one visible character and not more than 150.
 */
export class ERR_DOJO_INVALID_TXID extends CwiError { constructor (txid: string) { super('ERR_DOJO_INVALID_TXID', `Transaction associated with ${txid} is invalid.`) } }

/**
 * The label cannot be found linked with your user account.
 */
export class ERR_DOJO_LABEL_NOT_FOUND extends CwiError { constructor () { super('ERR_DOJO_LABEL_NOT_FOUND', 'The label cannot be found linked with your user account.') } }

/**
 * This paymail is not the same one used to create the request. The transaction was not broadcasted by the recipient.
 */
export class ERR_DOJO_PAYMAIL_MISMATCH extends CwiError { constructor () { super('ERR_DOJO_PAYMAIL_MISMATCH', 'This paymail is not the same one used to create the request. The transaction was not broadcasted by the recipient.') } }
/**
 * The provided paymail was not in the correct format.
 */
export class ERR_DOJO_PAYMAIL_NOT_FORMATTED_CORRECTLY extends CwiError { constructor () { super('ERR_DOJO_PAYMAIL_NOT_FORMATTED_CORRECTLY', 'The provided paymail was not in the correct format.') } }
/**
 * This paymail was not found on this server.
 */
export class ERR_DOJO_PAYMAIL_NOT_FOUND extends CwiError { constructor () { super('ERR_DOJO_PAYMAIL_NOT_FOUND', 'This paymail was not found on this server.') } }
/**
 * This Paymail handle is unavailable for registration by this server.
 */
export class ERR_DOJO_PAYMAIL_UNAVAILABLE extends CwiError { constructor () { super('ERR_DOJO_PAYMAIL_UNAVAILABLE', 'This Paymail handle is unavailable for registration by this server.') } }

/**
 * The reference you have provided is expired. The transaction was not broadcasted by the recipient.
 */
export class ERR_DOJO_REQUEST_EXPIRED extends CwiError { constructor () { super('ERR_DOJO_REQUEST_EXPIRED', 'The reference you have provided is expired. The transaction was not broadcasted by the recipient.') } }

/**
 * The signature you provided to authenticate this Paymail sender is not valid.
 */
export class ERR_DOJO_SENDER_SIGNATURE_CHECK extends CwiError { constructor () { super('ERR_DOJO_SENDER_SIGNATURE_CHECK', 'The signature you provided to authenticate this Paymail sender is not valid.') } }

/**
 * The transaction cannot be found linked with your user account.
 */
export class ERR_DOJO_TRANSACTION_NOT_FOUND extends CwiError { constructor () { super('ERR_DOJO_TRANSACTION_NOT_FOUND', 'The transaction cannot be found linked with your user account.') } }
/**
 * This transaction was rejected and was not broadcasted by the recipient. Ensure that all specified output scripts are present with the correct amounts assigned to each.
 */
export class ERR_DOJO_TRANSACTION_REJECTED extends CwiError { constructor (description?: string) { super('ERR_DOJO_TRANSACTION_REJECTED', description ?? 'This transaction was rejected and was not broadcasted by the recipient. Ensure that all specified output scripts are present with the correct amounts assigned to each.') } }
/**
 * No envelope for ${txid}
 */
export class ERR_DOJO_NO_ENVELOPE extends CwiError { constructor (txid: string) { super('ERR_DOJO_NO_ENVELOPE', `No envelope for ${txid}`) } }
/**
 * processPendingOuputs of outgoing transactions is not suported at this time.
 */
export class ERR_DOJO_PROCESS_PENDING_OUTGOING extends CwiError { constructor () { super('ERR_DOJO_PROCESS_PENDING_OUTGOING', 'processPendingOuputs of outgoing transactions is not suported at this time.') } }

/**
 * dojo sync ${step} status expected '${expected}' but received '${actual}'
 */
export class ERR_DOJO_SYNC_STATUS extends CwiError { constructor (step: string, expected: DojoSyncStatus, actual: DojoSyncStatus) { super('ERR_DOJO_SYNC_STATUS', `dojo sync ${step} status expected '${expected}' but received '${actual}'`) } }
/**
* refNum '${expected}' expected, '${actual}' received
*/
export class ERR_DOJO_SYNC_REFNUM extends CwiError { constructor (expected: string, actual: string) { super('ERR_DOJO_SYNC_REFNUM', `refNum '${expected}' expected, '${actual}' received`) } }
/**
* missing valid update state from syncDojo
*/
export class ERR_DOJO_SYNC_STATE extends CwiError { constructor () { super('ERR_DOJO_SYNC_STATE', 'missing valid update state from syncDojo') } }
/**
* sync total '${expected ?? 0}' expected, '${actual ?? 0}' received
*/
export class ERR_DOJO_SYNC_TOTAL extends CwiError { constructor (expected: number | undefined, actual: number | undefined) { super('ERR_DOJO_SYNC_TOTAL', `sync total '${expected ?? 0}' expected, '${actual ?? 0}' received`) } }
/**
* description || 'Dojo sync merge error.'
*/
export class ERR_DOJO_SYNC_MERGE extends CwiError { constructor (description?: string) { super('ERR_DOJO_SYNC_MERGE', description || 'Dojo sync merge error.') } }

/**
* description || 'Dojo foreign key validation error.'
*/
export class ERR_DOJO_FOREIGN_KEY extends CwiError { constructor (description?: string) { super('ERR_DOJO_FOREIGN_KEY', description || `Dojo foreign key validation error.`) } }
/**
* description || 'Dojo validation error.'
*/
export class ERR_DOJO_VALIDATION extends CwiError { constructor (description?: string) { super('ERR_DOJO_VALIDATION', description || `Dojo validation error.`) } }
/**
* description || 'Dojo transaction broadcast failed.'
*/
export class ERR_DOJO_BROADCAST_FAILED extends CwiError { constructor (description?: string) { super('ERR_DOJO_BROADCAST_FAILED', description || `Dojo transaction broadcast failed.`) } }
/**
* `Update is invalid on completed transaction txid=${asString(txid)}`
*/
export class ERR_DOJO_COMPLETED_TX extends CwiError { constructor (txid: string | Buffer) { super('ERR_DOJO_COMPLETED_TX', `Update is invalid on completed transaction txid=${asString(txid)}`) } }
/**
* `Update is invalid on proven transaction txid=${asString(txid)}`
*/
export class ERR_DOJO_PROVEN_TX extends CwiError { constructor (txid: string | Buffer) { super('ERR_DOJO_PROVEN_TX', `Update is invalid on proven transaction txid=${asString(txid)}`) } }