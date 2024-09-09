import { EnvelopeApi } from '@babbage/sdk-ts'
import { CwiError } from './CwiError'

/**
 * Not implemented.
 */
export class ERR_NOT_IMPLEMENTED extends CwiError { constructor () { super('ERR_NOT_IMPLEMENTED', 'Not implemented.') } }

/**
 * An internal server error has occurred.
 */
export class ERR_INTERNAL extends CwiError { constructor (description?: string) { super('ERR_INTERNAL', description ?? 'An internal server error has occurred.') } }

/**
 * Access is denied due to an authorization error.
 */
export class ERR_UNAUTHORIZED extends CwiError { constructor (description?: string) { super('ERR_UNAUTHORIZED', description ?? 'Access is denied due to an authorization error.') } }

/**
 * The ${name} parameter is invalid.
 */
export class ERR_INVALID_PARAMETER extends CwiError { constructor (name: string, mustBe?: string) { super('ERR_INVALID_PARAMETER', `The ${name} parameter must be ${mustBe ?? 'valid'}.`) } }

/**
 * The ${name} parameter is missing, but it must be ${mustBe}.
 */
export class ERR_MISSING_PARAMETER extends CwiError { constructor (name: string, mustBe: string) { super('ERR_MISSING_PARAMETER', `The ${name} parameter is missing, but it must be ${mustBe}.`) } }

/**
 * The request is invalid.
 */
export class ERR_BAD_REQUEST extends CwiError { constructor (description?: string) { super('ERR_BAD_REQUEST', description ?? 'The request is invalid.') } }

/**
 * Configured chain is invalid or does not match across services.
 */
export class ERR_CHAIN extends CwiError { constructor (description?: string) { super('ERR_CHAIN', description ?? 'Configured chain is invalid or does not match across services.') } }

/**
 * The current chain tip is not in sync with external sources.
 */
export class ERR_CHAIN_INVALID extends CwiError { constructor () { super('ERR_CHAIN_INVALID', 'The current chain tip is not in sync with external sources.') } }

/**
 * TXIDs must be 32 bytes encoded as 64 hex digits.
 */
export class ERR_TXID_INVALID extends CwiError { constructor () { super('ERR_TXID_INVALID', 'TXIDs must be 32 bytes encoded as 64 hex digits.') } }
/**
 * TXID failed to correspond to a known transaction.
 */
export class ERR_TXID_UNKNOWN extends CwiError { constructor (description?: string) { super('ERR_TXID_UNKNOWN', description ?? 'TXID failed to correspond to a known transaction.') } }

/**
 * Transaction is a double spend.
 * 
 * This exception includes `spendingTransactions`, an array of transaction envelopes
 * of conflicting transactions.
 */
export class ERR_DOUBLE_SPEND extends CwiError { constructor(public spendingTransactions: EnvelopeApi[], description?: string) { super('ERR_DOUBLE_SPEND', description ?? 'Transaction is a double spend.') } }