import {
   CreateActionOptions,
   CreateCertificateResult,
   DojoSendWithResultsApi,
   EnvelopeApi,
   EnvelopeEvidenceApi,
   MapiResponseApi,
   OptionalEnvelopeEvidenceApi,
   OutPoint,
} from '@babbage/sdk-ts'
import { CwiError } from '../CwiError'
import { Chain } from './CwiBaseApi'

/**
 * Public Dojo Api
 * No Authrite authentication required.
 * Not specific to any userId
 */
export interface DojoPublicApi {

   //
   // Public services, No Authrite
   //

   /**
      * Return the chain served by this Dojo
      *
      * Also serves to verifies that all dependent services are on same chain.
      */
   getChain(): Promise<Chain>

   //
   // Statistics
   //

   /**
      * @returns general storage statistics
      */
   stats(): Promise<DojoStatsApi>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DojoLoggerApi = (...data: any) => void

export type SyncDojoConfigType = '<custom>' | 'Cloud URL' | 'Sqlite File' | 'MySql Connection'

/**
 * Each syncDojo config has the following properties:
 * 
 * 'dojoType' one of 'Cloud URL' | 'Sqlite File' | 'MySql Connection'
 * 'dojoIdentityKey' the identity key of the syncDojo.
 * 'dojoName' the name of the syncDojo.
 */
export interface SyncDojoConfigBaseApi {
   /**
    * one of 'Cloud URL' | 'Sqlite File' | 'MySql Connection' | '<custom>'
    */
   dojoType: SyncDojoConfigType
   /**
    * the identity key of the syncDojo.
    */
   dojoIdentityKey: string
   /**
    * the name of the syncDojo.
    */
   dojoName?: string
}

/**
 * The derived `SyncDojoConfigCloudUrl` interface adds:
 * 
 * 'url' the service URL of the cloud dojo with which to sync
 * 
 * 'clientPrivateKey' should be the authenticated user's private key matching their identityKey to enable automatic use of Authrite.
 * 
 * 'useIdentityKey' may be set to true instead of using 'clientPrivateKey' if the cloud dojo does not use Authrite for access control.
 *
 * The cloud dojo must exists and must already be configured with matching dojoIdentityKey.
 *   
 * If neither 'clientPrivateKey' or 'useIdentityKey' has a value, will attempt to use the Babbage signing strategy for Authrite.
 */
export interface SyncDojoConfigCloudUrl extends SyncDojoConfigBaseApi {
   /**
    * the service URL of the cloud dojo with which to sync
    */
   url: string
   /**
    * should be the authenticated user's private key matching their identityKey to enable automatic use of Authrite.
    */
   clientPrivateKey?: string
   /**
    * may be set to true instead of using 'clientPrivateKey' if the cloud dojo does not use Authrite for access control.
    */
   useIdentityKey?: boolean
}

export interface SyncDojoConfigMySqlConnection extends SyncDojoConfigBaseApi {
   connection: string
}

export interface SyncDojoConfigSqliteFile extends SyncDojoConfigBaseApi {
   filename: string
}

export interface DojoIdentityApi {
   /**
    * The identity key (public key) assigned to this dojo
    */
   dojoIdentityKey: string
   /**
    * The human readable name assigned to this dojo.
    */
   dojoName?: string
}

/**
 * success: Last sync of this user from this dojo was successful.
 *
 * error: Last sync protocol operation for this user to this dojo threw and error.
 *
 * identified: Configured sync dojo has been identified but not sync'ed.
 *
 * unknown: Sync protocol state is unknown.
 */
export type DojoSyncStatus = 'success' | 'error' | 'identified' | 'updated' | 'unknown'

export type DojoSyncProtocolVersion = '0.1.0'

export interface DojoSyncErrorApi {
   code: string
   description: string
   stack?: string
}

export function toDojoSyncError(e: CwiError): DojoSyncErrorApi { return { code: e.code, description: e.description, stack: e.stack ?? '' } }

export interface DojoSyncMapApi {
   aliasIds: Record<number, number>
   certificateIds: Record<number, number>
   commissionIds: Record<number, number>
   responseIds: Record<number, number>
   basketIds: Record<number, number>
   outputIds: Record<number, number>
   provenTxReqIds: Record<number, number>
   provenTxIds: Record<number, number>
   txIds: Record<number, number>
   txLabelIds: Record<number, number>
   outputTagIds: Record<number, number>
}

/**
 * Receipt of `DojoSyncIdentityParams` via the `syncIdentify` function starts a dojo to dojo sync.
 *
 * It may also force a restart of the sync protocol.
 *
 * The purpose of the `Identify` phase is to identify both dojo's to each other,
 * the identity of the authenticated user, and the last known sync_state.
 */
export interface DojoSyncIdentifyParams {
   protocolVersion: DojoSyncProtocolVersion
   userIdentityKey: string
   dojoIdentityKey: string
   dojoName?: string
   refNum: string
}

export interface DojoSyncIdentifyResultApi {
   refNum: string
   identityKey: string
   name?: string
   status: DojoSyncStatus
   when?: Date
   error?: DojoSyncErrorApi
}

export interface DojoSyncUpdateParams {
   protocolVersion: DojoSyncProtocolVersion
   refNum: string
   since?: Date
}

export interface DojoSyncUpdateResultApi {
   refNum: string
   status: DojoSyncStatus
   since?: Date
   state?: DojoUserStateApi
   error?: DojoSyncErrorApi
}

export interface DojoSyncMergeParams {
   protocolVersion: DojoSyncProtocolVersion
   refNum: string
   when?: Date
   state?: DojoUserStateApi
   total?: number
   iSyncMap?: DojoSyncMapApi
   error?: DojoSyncErrorApi
}

export interface DojoSyncMergeResultApi {
   refNum: string
   status: DojoSyncStatus
   iSyncMap?: DojoSyncMapApi
   error?: DojoSyncErrorApi
}

/**
 * Dojo Sync Protocol
 *
 * The Dojo Sync Protocol keeps multiple UTXO management services (Dojos) synchronized as updates occur between them.
 *
 * The protocol relies on the properties of the blockchain to handle specific conflicts.
 *
 * It is intended to support use cases where there is a primary dojo which periodically synchronizes to backup "syncDojos".
 *
 * There is no formal conrol within the protocol for determining the primary dojo or transitioning between roles.
 *
 * Synchronization is initiated from the primary Dojo.
 *
 * Step 1. Run through the configured syncDojos calling syncIdentify which shares the local dojo and syncDojo's identities.
 * Any syncDojo that responds is added to activeSyncDojos.
 *
 * Step 2. Run through the activeSyncDojos calling syncUpdate.
 *
 */
export interface DojoSyncApi {
   /**
      * Called to initiate the sync protocol.
      *
      * This is the initial protocol step to exchange dojo identityKeys and
      * configure the records in the sync_state and sync_history tables to support the sync protocol.
      *
      * @param params Parameters identifying the primary initiating dojo, user, sarting status and protocol version.
      * @returns Equivalent parameters for this syncDojo.
      */
   syncIdentify(params: DojoSyncIdentifyParams): Promise<DojoSyncIdentifyResultApi>

   /**
      * Receive a state update for the authenticated user from a remote dojo
      * and respond with merge result and any pre-merge local state update
      * for the data interval from `since` to `when`
      */
   syncUpdate(params: DojoSyncUpdateParams): Promise<DojoSyncUpdateResultApi>

   /**
      * Informs a syncDojo of the result of merging state received from them.
      *
      * This is the only valid way that the syncDojo's `when` field in `sync_state` is updated which is critical to
      * guaranteeing that un-merged changes are presented until successfully merged.
      */
   syncMerge(params: DojoSyncMergeParams): Promise<DojoSyncMergeResultApi>

   /**
      * For Dojo scenarios where it is permissible for Dojo to directly act as
      * a specified user, authenticate that user by supplying their identityKey
      *
      * For Dojo scenarios where authrite is used to authenticate the local user
      * to a potentially remote Dojo server:
      * - If identityKey has a value then it used and must match the authenticated value.
      * - If identityKey is undefined, the authenticated value is used.
      *
      * Sets userId and identityKey
      *
      * @param identityKey optional, 33 hex encoded bytes, the user to authenticate's identity key
      * @param addIfNew optional, if true, unknown identityKey is added as new user.
      *
      * @throws ERR_UNAUTHORIZED if identityKey is required and invalid
      */
   authenticate(identityKey?: string, addIfNew?: boolean): Promise<void>

   /**
    * Returns the configuration of this dojo as a syncDojo
    */
   getSyncDojoConfig(): Promise<SyncDojoConfigBaseApi>
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DojoSyncOptionsApi {
   /**
    * If true, sync is disabled.
    */
   disableSync?: boolean
}

/**
 * Place holder for the transaction control object used by actual storage provider implementation.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TrxToken {
}

/**
 * User specific public Dojo API accessible from all Dojo implementations
 * including `DojoExpressClient` HTTP client
 */
export interface DojoClientApi extends DojoPublicApi, DojoSyncApi {

   /**
    * Returns true iff and instance of DojoExpressClient (or derived from it)
    */
   isDojoExpressClient() : boolean
   
   /**
      * For Dojo scenarios where it is permissible for Dojo to directly act as
      * a specified user, authenticate that user by supplying their identityKey
      *
      * For Dojo scenarios where authrite is used to authenticate the local user
      * to a potentially remote Dojo server:
      * - If identityKey has a value then it used and must match the authenticated value.
      * - If identityKey is undefined, the authenticated value is used.
      *
      * Sets userId and identityKey
      *
      * @param identityKey optional, 33 hex encoded bytes, the user to authenticate's identity key
      * @param addIfNew optional, if true, unknown identityKey is added as new user.
      *
      * @throws ERR_UNAUTHORIZED if identityKey is required and invalid
      */
   authenticate(identityKey?: string, addIfNew?: boolean): Promise<void>

   getDojoIdentity(): Promise<DojoIdentityApi>

   /**
      * Sync's this dojo's state for the authenticated user with all of the configured syncDojos
      *
      * This method must be called when either a local or remote state change occurs, or may have occurred.
      *
      * User state changes are propagated across all configured syncDojos.
      *
      * @param logger optional sync progress update logger
      */
   sync(logger?: DojoLoggerApi): Promise<void>

   setSyncDojosByConfig(syncDojoConfigs: SyncDojoConfigBaseApi[], options?: DojoSyncOptionsApi): Promise<void>

   getSyncDojosByConfig(): Promise<{ dojos: SyncDojoConfigBaseApi[], options?: DojoSyncOptionsApi }>

   /**
      * Returns authenticated user.
      * Throws an error if isAuthenticated is false.
      */
   getUser(): DojoClientUserApi

   /**
      * Returns the name and photo URL of the user
      * @returns {Promise<Avatar>} The avatar of the user
      */
   getAvatar(): Promise<DojoAvatarApi>

   /**
      * Update the avatar for the authenticated user.
      */
   setAvatar(avatar: DojoAvatarApi): Promise<void>

   /**
      * Return array of paymail style identifiers for currently authenticated user in `alias`@`domain` format.
      *
      * Where `alias` and `domain` come from the aliases table.
      *
      * and `reservationCompleted` is true
      */
   getCurrentPaymails(): Promise<string[]>

   /**
      * Save a new certificate with optional fields.
      *
      * certificate must belong to aunthenticated user.
      *
      * certificate.subject must match authenticated user's idenitityKey or throws ERR_DOJO_CERT_SUBJECT
      *
      * certificate.signature must be valid or throws ERR_DOJO_CERT_INVALID
      *
      * If { type, subject, validationKey, serialNumber, userId } already exist, throw ERR_DOJO_CERT_DUPE
      *
      * @returns the certificateId of the new certificate.
      */
   saveCertificate(certificate: DojoCertificateApi): Promise<number>

   /**
      * Returns all of the authenticated user's certificates,
      * where the certifier and type values match one of the optionaly
      * @param certifiers optional array of certifier identifiers, if provided results match at least one value.
      * @param types optional array of certificate types, if provided results match at least one value and only requested fields are returned.
      */
   findCertificates(certifiers?: string[], types?: Record<string, string[]>): Promise<DojoCertificateApi[]>

   /**
      * Returns the total of spendable output amounts.
      *
      * Returns undefined if basket is not undefined and doesn't match an existing basket name.
      *
      * If basket is not undefined, total is restricted to outputs in that basket.
      *
      * If basket is undefined, total is over all spendable outputs.
      *
      * @param basket name of existing outputs basket or undefined
      * @returns total of unspent outputs in named basket
      */
   getTotalOfUnspentOutputs(basket?: string): Promise<number | undefined>

   /**
      * Update `spendable` of an output that must exist,
      * belonging to the authenticated user,
      * in transaction with txid,
      * at index vout.
      *
      * @param txid
      * @param vout
      * @param spendable
      */
   updateOutpointStatus(txid: string, vout: number, spendable: boolean): Promise<void>

   /**
      * Returns the sum of transaction amounts belonging to authenticated user,
      * matching the given direction,
      * and optionally matching conditions in `options`.
      */
   getTotalOfAmounts(direction: 'incoming' | 'outgoing', options?: DojoGetTotalOfAmountsOptions): Promise<number>

   /**
      * Returns the net sum of transaction amounts belonging to authenticated user,
      * incoming plus outgoing, as outgoing amounts are negative and incoming amounts are positive.
      * and optionally matching conditions in `options`.
      */
   getNetOfAmounts(options?: DojoGetTotalOfAmountsOptions): Promise<number>

   /**
      * Update transaction status and associated ouputs (both inputs and outputs) spendable and spentBy properties.
      *
      * Updated transaction userId must match authenticated user and referenceNumber must match reference.
      *
      * @param reference
      * @param status New transaction status.
      */
   updateTransactionStatus(reference: string, status: DojoTransactionStatusApi): Promise<void>

   /**
      * Returns transactions matching options and total matching count available.
      *
      * @param options limit defaults to 25, offset defaults to 0, addLabels defaults to true, order defaults to 'descending'
      */
   getTransactions(options?: DojoGetTransactionsOptions): Promise<DojoGetTransactionsResultApi>

   /**
      * Returns transaction outputs matching options and total matching count available.
      *
      * @param options limit defaults to 25, offset defaults to 0, includeEnvelpe defaults to true
      */
   getTransactionOutputs(options?: DojoGetTransactionOutputsOptions): Promise<DojoGetTransactionOutputsResultApi>

   /**
      * Returns transaction labels matching options and total matching count available.
      *
      * @param options limit defaults to 25, offset defaults to 0, order defaults to 'descending'
      */
   getTransactionLabels(options?: DojoGetTransactionLabelsOptions): Promise<DojoGetTransactionLabelsResultApi>

   /**
      * Returns an Everett Style envelope for the given txid.
      *
      * A transaction envelope is a tree of inputs where all the leaves are proven transactions.
      * The trivial case is a single leaf: the envelope for a proven transaction is the rawTx and its proof.
      *
      * Each branching level of the tree corresponds to an unmined transaction without a proof,
      * in which case the envelope is:
      * - rawTx
      * - mapiResponses from transaction processors (optional)
      * - inputs object where keys are this transaction's input txids and values are recursive envelope for those txids.
      *
      * @param txid double hash of raw transaction as hex string
      */
   getEnvelopeForTransaction(txid: string): Promise<EnvelopeApi | undefined>

   /**
    * Returns array of Everett Style envelopes for transactions that spend one or
    * more of the inputs to transaction with `txid`, which must exist in Dojo.
    * 
    * This method supports double spend resolution.
    * 
    * @param txid  double hash of raw transaction as hex string
    */
   getEnvelopesOfConflictingTransactions(txid: string): Promise<EnvelopeApi[]>

   /**
      * Returns transactions with status of 'unsigned' or 'unprocessed' for authenticated user
      *
      * Original Dojo returned only these properties:
      *   'transactionId',
      *   'amount',
      *   'created_at',
      *   'referenceNumber',
      *   'senderPaymail',
      *   'truncatedExternalInputs',
      *   'status',
      *   'isOutgoing',
      *   'rawTransaction'
      *
      * @param referenceNumber optional referenceNumber to also match
      */
   getPendingTransactions(referenceNumber?: string): Promise<DojoPendingTxApi[]>

   /**
      * Constructs a new transaction spending known outputs (inputs) and creating new outputs.
      *
      * If the inputs to the transaction go beyond what is needed to fund these outputs (plus the transaction fee),
      * additional Dojo-managed UTXOs will be generated to collect the remainder
      * (see the "outputGeneration" parameter for more on this).
      *
      * @param inputs An object whose keys are TXIDs and whose values are payment envelopes
      * for external inputs to use when funding this transaction.
      *
      * If more funding is needed beyond what is given here to pay for the specified outputs
      * (plus the transaction fee), Dojo will select them from your baskets of unspent outputs
      * (see the "inputSelection" parameter for more on this).
      *
      * inputs[TXID]: Must be a payment envelope containing the transaction with output(s)
      * that will be spent and used as input.
      *
      * inputs[TXID].outputsToRedeem: An additional field, an array of outputs
      * from that transaction to be spent.
      *
      * @param params.inputSelection Optional. Algorithmic control over source of additional inputs that may be needed.
      * @param params.outputs Possibly empty, explicit outputs, typically external, to create as part of this transaction.
      * @param params.outputGeneration Optional. Algorithmic control over additional outputs that may be needed.
      * @param params.feeModel Optional. An object representing the fee the transaction will pay.
      * @param params.labels Optional. Each at most 150 characters. Labels can be used to tag transactions into categories
      * @param params.note Optional. A human-readable note detailing this transaction
      * @param params.recipient Optional. The Paymail handle of the recipient of this transaction
      * @param {CreateActionOptions} params.options Optional. Processing options.
      */
   createTransaction(params: DojoCreateTransactionParams): Promise<DojoCreateTransactionResultApi>

   /**
      * After creating a transaction with createTransaction and signing it, submit the serialized raw transaction
      * to transaction processors for processing.
      *
      * The reference number uniquely identifies the transaction in the database.
      *
      * Differences from v1:
      * 1. mapi_responses records are created when callbackIDs are generated, they exist before callbackID is given to external transaction processing service.
      *
      * @param rawTx The signed transaction serialized as a hex string or Buffer, not yet stored in database.
      * @param reference The reference number that you received from createTransaction uniquely identifying the database record.
      * @param outputMap An object whose keys are change output derivation suffixes
      *  and whose values are the corresponding output (vout) numbers within the transaction.
      *
      * @throws ERR_DOJO_INVALID_REFERENCE if reference is unknown
      * @throws ERR_DOJO_TRANSACTION_REJECTED if processors reject the transaction
      * @throws ERR_EXTSVS_DOUBLE_SPEND if transaction double spends an input
      *
      * @returns `DojoProcessTransactionResultApi` with txid and status of 'completed' or 'unknown'
      */
   processTransaction(params: DojoProcessTransactionParams): Promise<DojoProcessTransactionResultApi>

   /**
      * This endpoint allows a recipient to submit a transactions that was directly given to them by a sender.
      *
      * Saves the inputs and key derivation information, allowing the UTXOs to be redeemed in the future.
      *
      * Sets the transaction to completed and marks the outputs as spendable.
      */
   submitDirectTransaction(params: DojoSubmitDirectTransactionParams)
   : Promise<DojoSubmitDirectTransactionResultApi>

   /**
      * Return a complete copy of all records for the authenticated user.
      * @param since optional, start of data interval if specified.
      */
  copyState(since?: Date) : Promise<DojoUserStateApi>

   /**
    * Soft deletes a certificate.
    *
    * @param partial The partial certificate data identifying the certificate to soft delete.
    */
   softDeleteCertificate(partial: Partial<DojoCertificateApi>, trx?: TrxToken): Promise<number>;

   /**
    * Soft deletes an output tag.
    *
    * @param partial The partial output tag data identifying the tag to soft delete.
    */
   softDeleteOutputTag(partial: Partial<DojoOutputTagApi>, trx?: TrxToken): Promise<number>;

   /**
    * Soft deletes a transaction label.
    *
    * @param partial The partial transaction label data identifying the label to soft delete.
    */
   softDeleteTxLabel(partial: Partial<DojoTxLabelApi>, trx?: TrxToken): Promise<number>;

   /**
    * Soft deletes an output basket.
    *
    * @param partial The partial output basket data identifying the basket to soft delete.
    */
   softDeleteOutputBasket(partial: Partial<DojoOutputBasketApi>, trx?: TrxToken): Promise<number>;

    /**
     * Labels a transaction
     * 
     * Validates user is authenticated, txid matches an exsiting user transaction, and label value.
     * 
     * Creates new label if necessary.
     * 
     * Adds label to transaction if not already labeled.
     * Note: previously if transaction was already labeled, an error was thrown.
     * 
     * @param txid unique transaction identifier, either transactionId, txid, or a partial pattern.
     * @param label the label to be added, will be created if it doesn't already exist
     */
    labelTransaction(txid: string | number | Partial<DojoTransactionApi>, label: string, trx?: TrxToken): Promise<void>

    /**
     * Removes a label from a transaction
     * 
     * Validates user is authenticated, txid matches an exsiting user transaction, and label already exits.
     * 
     * Does nothing if transaction is not labeled.
     * 
     * @param txid unique transaction identifier, either transactionId, txid, or a partial pattern.
     * @param label the label to be removed from the transaction
     */
    unlabelTransaction(txid: string | number | Partial<DojoTransactionApi>, label: string, trx?: TrxToken): Promise<void>

    /**
     * Tags an output
     * 
     * Validates user is authenticated, partial identifies a single output, and tag value.
     * 
     * Creates new tag if necessary.
     * 
     * Adds tag to output if not already tagged.
     * 
     * @param partial unique output identifier as a partial pattern. 
     * @param tag the tag to add, will be created if it doesn't already exist
     */
    tagOutput(partial: Partial<DojoOutputApi>, tag: string, trx?: TrxToken): Promise<void>

    /**
     * Removes a tag from an output
     * 
     * Validates user is authenticated, partial identifies a single output, and tag already exits.
     * 
     * Does nothing if output is not tagged.
     * 
     * @param partial unique output identifier as a partial pattern. 
     * @param tag the tag to be removed from the output
     */
    untagOutput(partial: Partial<DojoOutputApi>, tag: string, trx?: TrxToken): Promise<void>

    /**
     * Removes the uniquely identified output's basket assignment.
     * 
     * The output will no longer belong to any basket.
     * 
     * This is typically only useful for outputs that are no longer usefull.
     *
     * @param partial unique output identifier as a partial pattern. 
     */
    unbasketOutput(partial: Partial<DojoOutputApi>, trx?: TrxToken): Promise<void>
    
   /**
    * Returns the current chain height of the network
    * @returns The current chain height
    */
   getHeight(): Promise<number>

   /**
    * A method to verify the validity of a Merkle root for a given block height.
    *
    * @returns merkle root for the given height or undefined, if height doesn't have a known merkle root or is invalid.
   */
   getMerkleRootForHeight(height: number): Promise<string | undefined>

    /**
     * Releases any persistent resources held by this dojo.
     * 
     * No further access must occur after `destroy()` has been called.
     */
    destroy() : Promise<void>
}

export type DojoTransactionStatusApi = 'completed' | 'failed' | 'unprocessed' | 'sending' | 'unproven' | 'unsigned' | 'nosend'

export type DojoRecordOrder =  'ascending' | 'descending'

export interface DojoGetTransactionsBaseOptions {
  /**
     * Optional. How many transactions to return.
     */
  limit?: number
  /**
     * Optional. How many transactions to skip.
     */
  offset?: number
  /**
     * Optional. Set sort order of results.
     */
  order?: DojoRecordOrder
}

export interface DojoGetTransactionsOptions extends DojoGetTransactionsBaseOptions {
   /**
      * Columns to return for each transaction. If undefined or empty, all columns are returned.
      */
   columns?: string[]
   /**
      * Optional. Match transactions with this referenceNumber.
      */
   referenceNumber?: string
   /**
      * Optional. Match transactions with this status.
      *
      * Defaults to ['unproven', 'completed']
      */
   status?: DojoTransactionStatusApi | DojoTransactionStatusApi[]
   /**
      * Optional. Match transactions with this label.
      */
   label?: string
   /**
      * Optional. Match transactions created on or after this time. Date, ISO string, or seconds since the epoch.
      */
   startTime?: Date | string | number
   /**
      * Optional. Match transactions created on or before this time. Date, ISO string, or seconds since the epoch.
      */
   endTime?: Date | string | number
   /**
      * Optional. Match transactions with either senderPaymail or recipientPaymail matching this value.
      */
   involving?: string
   /**
      * Optional. If true, array of mapped `labels` is added to each transaction.
      */
   addLabels?: boolean
   /**
      * Optional. If true, include the list of transaction inputs and outputs when retrieving transactions.
      * Enabling this option adds the 'inputs' and 'outputs' properties to each transaction, providing detailed information about the transaction's inputs and outputs.
      */
   addInputsAndOutputs?: boolean
   /**
    * If true and `addInputsAndOutputs` is true, the `DojoOutputXApi` `basket` property will be included in inputs and outputs.
    */
   includeBasket?: boolean
   /**
    * If true and `addInputsAndOutputs` is true, the `DojoOutputXApi` `tags` property will be included in inputs and outputs.
    */
   includeTags?: boolean
   /**
    * If true, excludes rawTransaction values from results. 
    */
   noRawTx?: boolean
   /**
    * If true, excludes outputScript values from results. 
    */
   noScript?: boolean

   partial?: Partial<DojoTransactionApi>
}

export interface DojoGetTransactionOutputsOptions extends DojoGetTransactionsBaseOptions {
  /**
     *  If provided, indicates which basket the outputs should be selected from.
     */
  basket?: string
  /**
     *  If provided, only outputs with the corresponding tracked value will be returned (true/false).
     */
  tracked?: boolean
  /**
     * If given as true or false, only outputs that have or have not (respectively) been spent will be returned. If not given, both spent and unspent outputs will be returned.
     */
  spendable?: boolean
  /**
   * An optional array of output tag names
   */
  tags?: string[]
  /**
     * If provided, only outputs of the specified type will be returned. If not provided, outputs of all types will be returned.
     */
  type?: string
  /**
     * If provided, returns a structure with the SPV envelopes for the UTXOS that have not been spent.
     */
  includeEnvelope?: boolean
  /**
     * If provided, returns customInstructions for each output.
     * Note that includeEnvelope also enables including customInstructions
     */
  includeCustomInstructions?: boolean
  /**
   * If true, the `DojoOutputXApi` `basket` property will be included in results.
   */
  includeBasket?: boolean
  /**
   * If true, the `DojoOutputXApi` `tags` property will be included in results.
   */
  includeTags?: boolean
  /**
   * When `tags` contains more than one value, determines if each output returned
   * must have `all` of the tags or `any` of the tags.
   * 
   * The default is `all`
   */
  tagQueryMode?: 'all' | 'any'

  /**
   * if true, outputScript is returned as null. scriptLength and scriptOffset remain valid.
   */
  noScript?: boolean

  partial?: Partial<DojoOutputApi>
}

export interface DojoGetTransactionsResultApi {
   txs: DojoTransactionXApi[],
   total: number
}

export interface DojoGetTransactionOutputsResultApi {
   outputs: DojoOutputXApi[],
   total: number
}

export interface DojoGetTransactionLabelsResultApi {
   labels: DojoTxLabelApi[],
   total: number
}

export type DojoTransactionLabelsSortBy = 'label' | 'whenLastUsed';

export interface DojoGetTransactionLabelsOptions extends DojoGetTransactionsBaseOptions {
   /**
      * Optional. Filters labels to include only those starting with the specified prefix.
      */
   prefix?: string
   /**
      * Optional. Filters labels to include only those associated with the specified transaction ID.
      */
   transactionId?: number
   /**
      * Optional. Specify whether to sort by 'label' or 'whenLastUsed'.
      */
   sortBy?: DojoTransactionLabelsSortBy
}

export interface DojoGetTotalOfAmountsOptions {
   /**
      * Optional. Match transactions with this label.
      */
   label?: string
   /**
      * Optional. Match transactions created on or after this time. Seconds since the epoch.
      */
   startTime?: Date | string | number
   /**
      * Optional. Match transactions created on or before this time. Seconds since the epoch.
      */
   endTime?: Date | string | number
   /**
      * Optional. Match transactions with either senderPaymail or recipientPaymail matching this value.
      */
   involving?: string
   /**
      * Direction of value flow.
      */
   direction?: 'incoming' | 'outgoing'
}

export interface DojoStatsApi {
   users: number
   transactions: number
   txLabels: number
   outputTags: number
   chain: Chain
}

export interface DojoUserStateApi {
   /**
    * If undefined, this is the complete state for the given `user`.
    * 
    * If a valid `Date`, these are the entities updated since that date.
    */
   since?: Date
   user: DojoUserApi
   certificates: DojoCertificateApi[]
   certificateFields: DojoCertificateFieldApi[]
   commissions: DojoCommissionApi[]
   mapiResponses: DojoMapiResponseApi[]
   outputs: DojoOutputApi[]
   baskets: DojoOutputBasketApi[]
   provenTxReqs: DojoProvenTxReqApi[]
   provenTxs: DojoProvenTxApi[]
   txs: DojoTransactionApi[]
   txLabels: DojoTxLabelApi[]
   txLabelMaps: DojoTxLabelMapApi[]
   outputTags: DojoOutputTagApi[]
   outputTagMaps: DojoOutputTagMapApi[]
}

export interface DojoEntityTimeStampApi {
   created_at?: Date | null
   updated_at?: Date | null
}

export interface DojoAliasApi extends DojoEntityTimeStampApi {
   aliasId?: number
   created_at?: Date | null
   updated_at?: Date | null
   /**
      * max length of 30
      */
   alias: string
   /**
      * max length of 30
      */
   domain: string
   /**
      * max length of 30
      */
   avatarName?: string
   /**
      * max length of 100
      */
   avatarPhotoURL?: string
   reservationCompleted: boolean
   userId: number
   destinationBasketId: number
}

export interface DojoAvatarApi {
   /**
      * The name of the user
      */
   name: string
   /**
      * An HTTPS or UHRP URL to a photo of the user
      */
   photoURL: string
}

export interface DojoCertificateFieldApi extends DojoEntityTimeStampApi {
   userId: number
   certificateId: number
   created_at?: Date | null
   updated_at?: Date | null
   /**
      * max length of 100
      */
   fieldName: string
   /**
      * max length of 255
      */
   fieldValue: string
   /**
      * base64 encrypted master field revelation key
      */
   masterKey: string
}

export interface DojoCertificateApi extends DojoEntityTimeStampApi, CreateCertificateResult {
   certificateId?: number
   created_at?: Date | null
   updated_at?: Date | null
   userId: number
   /**
      * max length of 255
      */
   type: string
   /**
      * max length of 255
      */
   subject: string
   /**
      * max length of 255
      */
   validationKey: string
   /**
      * max length of 255
      */
   serialNumber: string
   /**
      * max length of 255
      */
   certifier: string
   /**
      * max length of 255
      */
   revocationOutpoint: string
   /**
      * max length of 255
      */
   signature: string
   /**
      * Certificate fields object constructed from fieldName and fieldValue properties of DojoCertificateFieldApi instances associated with this certificate.
      */
   fields?: Record<string, string>
   /**
      * Certificate masterKeyring object constructed from fieldName and masterKey properties of DojoCertificateFieldApi instances associated with this certificate.
      */
   masterKeyring?: Record<string, string>
   /**
      * Optional. Indicates whether the certificate is deleted. isDeleted defaults to false.
      */
   isDeleted?: boolean
}

export interface DojoCommissionApi extends DojoEntityTimeStampApi {
   commissionId?: number
   created_at?: Date | null
   updated_at?: Date | null
   transactionId: number
   userId: number
   isRedeemed: boolean
   /**
      * max length of 130
      */
   keyOffset: string
   outputScript: Buffer | null
   /**
      * 15 integer digits
      */
   satoshis: number
}

export interface DojoMapiResponseApi extends DojoEntityTimeStampApi {
   responseId?: number
   created_at?: Date | null
   updated_at?: Date | null
   provenTxReqId?: number
   txid?: string
   callbackID?: string
   payload?: string
   /**
      * max length of 255
      */
   publicKey?: string
   /**
      * max length of 255
      */
   signature?: string
   /**
      * max length of 16
      */
   doubleSpendResponse?: string | null
}

export interface DojoOutputApi extends DojoEntityTimeStampApi {
   outputId?: number
   created_at?: Date | null
   updated_at?: Date | null
   spendable: boolean
   change: boolean
   /**
      * length 64 hex encoded
      */
   txid: string | null
   /**
      * max 10 digits
      */
   vout: number | null
   /**
      * max 15 digits
      */
   amount: number | null
   outputScript: Buffer | null
   scriptLength?: number | null
   scriptOffset?: number | null
   /**
      * max length of 50
      * e.g. P2PKH, custom
      */
   type: string
   transactionId: number
   userId: number
   basketId?: number | null
   /**
      * transactionId of spending transaction or null if unspent
      * max 10 digits
      */
   spentBy: number | null
   /**
      * max length of 32
      * base64 encoded
      */
   derivationPrefix: string | null
   /**
      * max length of 32
      * base64 encoded
      */
   derivationSuffix: string | null
   /**
      * max length of 64
      */
   paymailHandle: string | null
   /**
      * max length of 130
      * hex encoded
      */
   senderIdentityKey: string | null
   /**
      * max length of 2500
      */
   customInstructions: string | null
   /**
      * true if output was put in a basket for tracking
      */
   tracked: boolean | null
   /**
      * max length of 130
      * e.g. you, dojo
      */
   providedBy: string | null
   /**
      * max length of 20
      * e.g. change
      */
   purpose: string | null
   /**
      * max length of 255
      */
   description: string | null
   /**
      * max length of 255
      */
   spendingDescription: string | null
   /**
      * optional envelope for transaction containing output
      */
   envelope?: EnvelopeApi
}

export interface DojoOutputXApi extends DojoOutputApi {
   basket?: DojoOutputBasketApi
   tags?: DojoOutputTagApi[]
}

export interface DojoOutputBasketApi extends DojoEntityTimeStampApi {
   basketId?: number
   created_at?: Date | null
   updated_at?: Date | null
   /**
      * max length of 1000
      */
   name: string
   numberOfDesiredUTXOs: number
   minimumDesiredUTXOValue: number
   userId: number
   /**
    * Optional. Indicates whether the basket is deleted. isDeleted defaults to false.
    */
   isDeleted?: boolean
}

export interface DojoTransactionApi extends DojoEntityTimeStampApi {
   transactionId?: number
   created_at?: Date | null
   updated_at?: Date | null
   /**
      * length 64 hex encoded
      */
   txid: string
   /**
    * Optional. Default is zero.
    * When the transaction can be processed into a block:
    * >= 500,000,000 values are interpreted as minimum required unix time stamps in seconds
    * < 500,000,000 values are interpreted as minimum required block height
    */
   lockTime?: number | null
   /**
    * If not undefined, must match value in associated rawTransaction.
    */
   version?: number | null
   /**
    * When the transaction can be processed into a block:
    * >= 500,000,000 values are interpreted as minimum required unix time stamps in seconds
    * < 500,000,000 values are interpreted as minimum required block height
    */
   rawTransaction: Buffer | null
   /**
      * max length of 64
      * e.g. completed, failed, unprocessed, unproven, unsigned
      */
   status: DojoTransactionStatusApi
   /**
      * max length of 64, hex encoded
      */
   referenceNumber: string | null
   /**
      * max 15 digits
      */
   amount: number
   userId: number
   /**
      * max length of 100
      */
   senderPaymail: string | null
   /**
      * max length of 100
      */
   recipientPaymail: string | null
   /**
      * max length of 500
      */
   note: string | null
   /**
      * true if transaction originated in this wallet, change returns to it.
      * false for a transaction created externally and handed in to this wallet.
      */
   isOutgoing: boolean
   unconfirmedInputChainLength: number
   proof: string | null
   beef: Buffer | null
   truncatedExternalInputs: string | null
   /**
      * Is valid when transaction proof record exists in DojoProvenTxApi table.
      */
   provenTxId?: number | null

   /**
      * When not undefined, array of assigned tx_labels.label values.
      * 
      * This is an extended property with data from dependent label entities.
      */
   labels?: string[]
}

export interface DojoTransactionXApi extends DojoTransactionApi {
   /**
    * When not undefined, prior outputs now serving as inputs to this transaction
      * 
      * This is an extended property with data from dependent output entities.
    */
   inputs?: DojoOutputXApi[]
   /**
    * When not undefined, outputs created by this transaction
    * 
    * This is an extended property with data from dependent output entities.
    */
   outputs?: DojoOutputXApi[]
}

/**
 * Initial status (attempts === 0):
 *
 * unsent: rawTx has not yet been sent to the network for processing. Next attempt should send it.
 * 
 * nosend: transaction was marked 'noSend'. It is complete and signed. It may be sent by an external party. Proof should be sought as if 'unmined'. No error if it remains unknown by network.
 *
 * sending: At least one attempt to send rawTx to transaction processors has occured without confirmation of acceptance.
 *
 * unknown: rawTx status is unknown but is believed to have been previously sent to the network.
 *
 * Attempts > 0 status, processing:
 *
 * unknown: Last status update received did not recognize txid or wasn't understood.
 *
 * nonfinal: rawTx has an un-expired nLockTime and is eligible for continuous updating by new transactions with additional outputs and incrementing sequence numbers.
 *
 * unmined: Last attempt has txid waiting to be mined, possibly just sent without callback
 *
 * callback: Waiting for proof confirmation callback from transaction processor.
 *
 * unconfirmed: Potential proof has not been confirmed by chaintracks
 *
 * Terminal status:
 *
 * doubleSpend: Transaction spends same input as another transaction.
 *
 * invalid: rawTx is structuraly invalid or was rejected by the network. Will never be re-attempted or completed.
 *
 * completed: proven_txs record added, and notifications are complete.
 */
export type DojoProvenTxReqStatusApi =
   'sending' | 'unsent' | 'nosend' | 'unknown' | 'nonfinal' |
   'unmined' | 'callback' | 'unconfirmed' |
   'completed' | 'invalid' | 'doubleSpend'

export const DojoProvenTxReqTerminalStatus: DojoProvenTxReqStatusApi[] = [
   'completed', 'invalid', 'doubleSpend'
]

export const DojoProvenTxReqNonTerminalStatus: DojoProvenTxReqStatusApi[] = [
   'sending', 'unsent', 'nosend', 'unknown', 'nonfinal',
   'unmined', 'callback', 'unconfirmed'
]

export interface DojoProvenTxReqApi extends DojoEntityTimeStampApi {
   provenTxReqId?: number
   created_at?: Date | null
   updated_at?: Date | null
   txid: string
   callbackID?: string
   beef?: Buffer | null
   rawTx?: Buffer
   /**
      * JSON string of processing history.
      * Parses to `DojoProvenTxReqHistoryApi`.
      */
   history: string
   /**
      * JSON string of data to drive notifications when this request completes.
      * Parses to `DojoProvenTxReqNotifyApi`.
      */
   notify: string
   /**
    * Set to true when a terminal status has been set and notification has occurred.
    */
   notified: boolean
   /**
      * See `DojoProvenTxReqStatusApi`
      */
   status: DojoProvenTxReqStatusApi
   /**
      * Count of how many times a service has been asked about this txid
      */
   attempts: number
   /**
      * Once a DojoProvenTxApi record has been validated and added to database, the provenTxId value.
      */
   provenTxId?: number
}

export interface DojoProvenTxApi extends DojoEntityTimeStampApi {
   provenTxId?: number
   created_at?: Date | null
   updated_at?: Date | null
   txid: string
   height: number
   index: number
   /**
      * Serialized 32 bytes per node.
      */
   nodes: Buffer
   rawTx: Buffer
   blockHash: Buffer
   merkleRoot: Buffer
}

export interface DojoTxLabelApi extends DojoEntityTimeStampApi {
   txLabelId?: number
   created_at?: Date | null
   updated_at?: Date | null
   /**
      * max length of 150
      * e.g. babbage_app_..., babbage_protocol_..., babbage_spend_..., babbage_basket_..., babbage_cert_...., babbage_certificate_, nanostore
      */
   label: string
   userId: number
   /**
    * valid only when retrieved by with the 'whenLastUsed' sort option.
    */
   whenLastUsed?: Date | null
   /**
    * Optional. Indicates whether the label is deleted. isDeleted defaults to false.
    */
   isDeleted?: boolean
}

export interface DojoTxLabelMapApi extends DojoEntityTimeStampApi {
   created_at?: Date | null
   updated_at?: Date | null
   txLabelId: number
   transactionId: number
   /**
    * Optional. Indicates whether the label is deleted. isDeleted defaults to false.
    */
   isDeleted?: boolean
}

export interface DojoOutputTagApi extends DojoEntityTimeStampApi {
   outputTagId?: number
   created_at?: Date | null
   updated_at?: Date | null
   tag: string
   userId: number
   /**
    * Optional. Indicates whether the tag is deleted. isDeleted defaults to false.
    */
   isDeleted?: boolean
}

export interface DojoOutputTagMapApi extends DojoEntityTimeStampApi {
   created_at?: Date | null
   updated_at?: Date | null
   outputTagId: number
   outputId: number
   /**
    * Optional. Indicates whether the tag is deleted. isDeleted defaults to false.
    */
   isDeleted?: boolean
}

export interface DojoClientUserApi extends DojoEntityTimeStampApi {
   userId?: number
   created_at?: Date | null
   updated_at?: Date | null
   /**
      * max length of 130
      * hex encoded
      */
   identityKey: string
}

export interface DojoUserApi extends DojoClientUserApi, DojoEntityTimeStampApi {
   userId?: number
   created_at?: Date | null
   updated_at?: Date | null
   /**
      * max length of 130
      * hex encoded
      */
   identityKey: string
   /**
      * max 12 digits
      */
   timeSpentProcessingRequests?: number
   /**
      * max 18 digits
      */
   bandwidthUsed?: number
   /**
      * max 15 digits
      */
   storageSpaceUsedByHostedData?: number
}

export interface DojoPendingTxInputInstructionsApi {
   /**
      * max length of 50
      * e.g. P2PKH, custom
      */
   type: string
   /**
      * max length of 32
      * base64 encoded
      */
   derivationPrefix: string | null
   /**
      * max length of 32
      * base64 encoded
      */
   derivationSuffix: string | null
   /**
      * max length of 64
      */
   paymailHandle: string | null
   /**
      * max length of 130
      * hex encoded
      */
   senderIdentityKey: string | null
   /**
      * max length of 2500
      */
   customInstructions: string | null
}

export interface DojoPendingTxInputApi extends EnvelopeEvidenceApi {
   outputsToRedeem?: number[]
   instructions?: Record<number, DojoPendingTxInputInstructionsApi>
}

export type DojoProvidedByApi = 'you' | 'dojo' | 'you-and-dojo'

export interface DojoPendingTxOutputApi {
   type: string
   satoshis: number
   script?: string
   derivationPrefix?: string
   derivationSuffix?: string
   paymailHandle?: string
   providedBy?: string
   purpose?: string
   senderIdentityKey?: string
   txid?: string
   vout?: number
}

/**
 * Return type from Ninja and Dojo getPendingTransactions methods.
 */
export interface DojoPendingTxApi {
   amount: number
   created_at: string
   referenceNumber: string
   senderPaymail?: string
   status: string
   isOutgoing: boolean
   rawTransaction?: string
   derivationPrefix?: string
   paymailHandle?: string

   inputs: Record<string, DojoPendingTxInputApi>

   outputs: DojoPendingTxOutputApi[]
}

/**
 * Input parameters for Dojo and Ninja processTransaction
 */
export interface DojoProcessTransactionParams {
   /**
    * The transaction that has been created and signed
    */
   submittedTransaction?: string | Buffer | number[]
   /**
    * Unique reference number for submittedTransaciton provided by `createTransaction` or `getTransactionWithOutputs`
    */
   reference?: string
   /**
    * Supporting evidence for submittedTransaction inputs in `EnvelopeEvidenceApi` format.
    */
   inputs?: Record<string, OptionalEnvelopeEvidenceApi>
   /**
    * Supporting evidence for submittedTransaction inputs in serialized BEEF format.
    */
   beef?: number[]
   /**
    * Valid for options.noSend true.
    * 
    * Change output(s) that may be forwarded to chained noSend transactions.
    */
   noSendChange?: OutPoint[]
   /**
    * An object whose keys are derivation prefixes and whose values are corresponding change output numbers from the transaction.
    */
   outputMap?: Record<string, number>
   /**
    * Processing options.
    */
   options?: CreateActionOptions
   /**
    * DEPRECATED: Use `options.acceptDelayedBroadcast`
    * 
    * Set to true for normal, high performance operation and offline
    * operation if running locally.
    *
    * Always validates `submittedTransaction` and remaining inputs.
    *
    * If true, creates a self-signed MapiResponse for the transaction
    * and queues it for repeated broadcast attempts and proof validation.
    * The `status` of the transaction will be set to `unproven`.
    * 
    * If not true, attempts one broadcast and fails the transaction
    * if it is not accepted by at least one external transaction processor.
    * If it is accepted, status is set to `unproven'.
    * The transaction may still fail at a later time if a merkle
    * proof is not confirmed.
    *
    * The transaction status will be set to `completed` or `failed`
    * depending on the success or failure of broadcast attempts
    * and Chaintracks validation of a merkle proof.
    * 
    * When status is set to `unproven` or `completed`:
    * - Inputs are confirmed to be spendable false, spentBy this transaction.
    * - Outputs are set to spendable true unless already spent (spentBy is non-null).
    *
    * If the transaction fails, status is set to `failed`:
    * - Inputs are returned to spendable true, spentBy null
    * - Outputs are set to spendable false
    * - If spentBy is non-null, failure propagates to that transaction.
    */
   acceptDelayedBroadcast?: boolean

   /**
      * Optional transaction processing history
      */
   log?: string
}

export interface DojoProcessTransactionResultApi {
   txid: string
   transactionId: number
   status: 'sending' | 'unproven' | 'failed' | 'nosend'
   mapiResponses: MapiResponseApi[]
   beef?: number[]
   rawTx?: string
   inputs?: Record<string, OptionalEnvelopeEvidenceApi>
   sendWithResults?: DojoSendWithResultsApi[]
   log?: string
}

export interface DojoOutputToRedeemApi {
   /**
      * Zero based output index within its transaction to spend.
      */
   index: number
   /**
      * byte length of unlocking script
      *
      * Note: To protect client keys and utxo control, unlocking scripts are never shared with Dojo.
      */
   unlockingScriptLength: number
   spendingDescription?: string
}

export interface DojoTxInputsApi extends OptionalEnvelopeEvidenceApi {
   outputsToRedeem: DojoOutputToRedeemApi[]
}

/**
 * If Dojo needs to select more inputs beyond the ones specified in order to fund the transaction,
 * this object describes which kinds of inputs can be selected, and from where.
 */
export interface DojoTxInputSelectionApi {
   /**
      * This is a boolean that, when true, will forbid Dojo from adding any additional inputs to your transaction,
      * beyond what you specified in the "inputs" parameter.
      * Thus, if you have not sufficiently funded the transaction yourself,
      * or if the "inputs" array is empty, you will get an error.
      */
   disable: boolean
   /**
      * This is an array of UTXO basket names from which UTXOs can be selected for spending.
      * To only select UTXOs of a certain type, configure the source basket only to accept those types of UTXOs.
      * By default, UTXOs will only be selected if they are in the "default" basket.
      */
   baskets: string[]
   /**
      * An integer representing the maximum length for any chain of unconfirmed parents
      * that a selected input can have.
      * When undefined or -1 (the default), no maximum is specified.
      * Cannot be zero.
      * When 1, indicates that the input must itself be confirmed.
      * When 2, input parents must be confirmed.
      * When 3 denotes grandparents.
      * When 4 great-grandparents and so forth.
      */
   maxUnconfirmedChainLength?: number
   /**
    * If true, UTXOS from transactions with status 'sending' are included.
    * Transactions with status 'sending' have not yet been successfully sent to the network.
    * Their outputs are only acceptable for the `acceptDelayedBroadcast = true` mode of transaction
    * processing.
    */
   includeSending?: boolean
}

/**
 * A specific output to be created as part of a new transactions.
 * These outputs can contain custom scripts as specified by recipients.
 */
export interface DojoCreateTxOutputApi {
   /**
      * The output script that will be included, hex encoded
      */
   script: string
   /**
      * The amount of the output in satoshis
      */
   satoshis: number
   /**
      * Human-readable output line-item description
      */
   description?: string
   /**
      * Destination output basket name for the new UTXO
      */
   basket?: string
   /**
      * Custom spending instructions (metadata, string, optional)
      */
   customInstructions?: string
   
   /**
    * Optional array of output tags to assign to this output.
    */
   tags?: string[]
}

/**
 * If Dojo needs to generate additional outputs for the transaction beyond what was specified,
 * this object describes what kind of outputs to generate, and where they should be kept.
 */
export interface DojoOutputGenerationApi {
   /**
      * TODO (coming soon).
      * Specify the basket where the generated outputs will be kept.
      * Only output types compatible with the destination basket will be generated.
      */
   basket: string
   /**
      * The method used to generate outputs.
      * "auto" (the default) selects the amount and types of generated outputs based on the selected basket's
      * configuration for how many of each type to keep on hand,
      * then uses Benford's law to distribute the satoshis across them.
      * "single" just uses one output, randomly selected from the available types, that contains all the satoshis.
      */
   method: 'auto' | 'single'
}

/**
 * An object representing the fee the transaction will pay.
 */
export interface DojoFeeModelApi {
   /**
      * The fee model to use, default "sat/kb"
      */
   model: 'sat/kb'
   /**
      * When "fee.model" is "sat/kb", this is an integer representing the number of satoshis per kb of block space
      * the transaction will pay in fees.
 
      * If undefined, the default value is used which may vary with market conditions.
      */
   value?: number
}

export interface DojoCreateTransactionParams {
   /**
    * Possibly empty, explicit outputs, typically external, to create as part of this transaction.
    */
   outputs: DojoCreateTxOutputApi[],
   /**
    * Optional. Specific inputs to draw on when creating outputs.
    */
   inputs?: Record<string, DojoTxInputsApi>,
   /**
    * Optional. Algorithmic control over source of additional inputs that may be needed.
    */
   inputSelection?: DojoTxInputSelectionApi,
   /**
    * Optional. Algorithmic control over additional outputs that may be needed.
    */
   outputGeneration?: DojoOutputGenerationApi,
   /**
    * Optional. Default is zero.
    * When the transaction can be processed into a block:
    * >= 500,000,000 values are interpreted as minimum required unix time stamps in seconds
    * < 500,000,000 values are interpreted as minimum required block height
    */
   lockTime?: number;
   /**
    * If not undefined, must match value in associated rawTransaction.
    */
   version?: number
   /**
    * Optional. An object representing the fee the transaction will pay.
    */
   feeModel?: DojoFeeModelApi,
   /**
    * Optional. Each at most 150 characters. Labels can be used to tag transactions into categories
    */
   labels?: string[],
   /**
    * Optional. A human-readable note detailing this transaction (Optional)
    */
   note?: string,
   /**
    * Optional. The Paymail handle of the recipient of this transaction (Optional)
    */
   recipient?: string
   /**
    * Processing options.
    */
   options?: CreateActionOptions

   /**
    * Optional transaction processing history
    */
   log?: string
}

export interface DojoCreatingTxOutputApi extends DojoCreateTxOutputApi {
   vout: number
   providedBy: DojoProvidedByApi
   purpose?: string
   destinationBasket?: string
   derivationSuffix?: string
   keyOffset?: string
}

export interface DojoCreatingTxInstructionsApi {
   type: string
   paymailHandle?: string
   derivationPrefix?: string
   derivationSuffix?: string
   senderIdentityKey?: string
}

export interface DojoCreatingTxInputsApi extends DojoTxInputsApi {
   providedBy: DojoProvidedByApi
   instructions: Record<number, DojoCreatingTxInstructionsApi>
}

export interface DojoCreateTransactionResultApi {
   inputs: Record<string, DojoCreatingTxInputsApi>
   /**
    * This will be a partially valid serialized BEEF value.
    * 
    * Includes proof data for the inputs to the transaction being created.
    * Some txids may be `known`, either by Dojo or the user, in which case
    * their rawTx are not included.
    * 
    * It is recommended to the `@babbage/sdk-ts` package's `Beef` class to
    * deserialize and complete the creation of a valid beef.
    */
   inputBeef?: number[]
   outputs: DojoCreatingTxOutputApi[]
   noSendChangeOutputVouts?: number[]
   derivationPrefix: string
   version: number
   lockTime: number
   referenceNumber: string
   note?: string
   options: CreateActionOptions
   log?: string
   /**
    * DEPRECATED
    */
   paymailHandle?: string
}

export interface DojoSubmitDirectTransactionOutputApi {
   vout: number
   satoshis: number
   basket?: string
   derivationPrefix?: string
   derivationSuffix?: string
   customInstructions?: string
   senderIdentityKey?: string
   tags?: string[]
}

export interface DojoSubmitDirectTransactionApi extends OptionalEnvelopeEvidenceApi {
   /**
      * sparse array of outputs of interest where indices match vout numbers.
      */
   outputs: DojoSubmitDirectTransactionOutputApi[]
   referenceNumber?: string
}

/**
 * Input parameters to submitDirectTransaction method.
 * 
 * Normally used to receive spendable outputs from an externally
 * sourced transaction (one created by a party other than this user).
 * A transaction record is created for this user with isOutgoing false.
 * New spendable output records are created for the indicated outputs of
 * the transaction.
 * 
 * When submitDirectTransaction is called with outputs previously
 * created by the same user on an isOutgoing true transaction,
 * these params serve to update those outputs and the transaction amount.
 * The transaction remains isOutgoing true.
 * 
 * When submitDirectTransaction is called again with additional outputs
 * on previously submitted isOutgoing false transaction,
 * these params serve to create new outputs and update the transaction amount.
 * The transaction remains isOutgoing false.
 */
export interface DojoSubmitDirectTransactionParams {
  /**
     * Specify the transaction submission payment protocol to use.
     * Currently, the only supported protocol is that with BRFC ID "3241645161d8"
     */
  protocol?: string
  /**
     * The transaction envelope to submit, including key derivation information.
     *
     * transaction.outputs is an array of outputs, each containing:
     *  `vout`,
     *  `satoshis`,
     *  `derivationSuffix`,
     *  and (optionally), `derivationPrefix`.
     *
     * If a global `derivationPrefix` is used (recommended),
     * output-specific derivation prefixes should be omitted.
     */
  transaction: DojoSubmitDirectTransactionApi
  /**
     * Provide the identity key for the person who sent the transaction
     */
  senderIdentityKey: string
  /**
     * Human-readable description for the transaction
     */
  note: string
  /**
     * Labels to assign to transaction.
     */
  labels?: string[]
  /**
     * A derivation prefix used for all outputs. If provided, derivation prefixes on all outputs are optional.
     */
  derivationPrefix?: string
  amount?: number
}



export interface DojoSubmitDirectTransactionResultApi {
   transactionId: number
   referenceNumber: string
}
