# cwi-base

Base classes, types, utilities for implementation support of CWI components, Project Babbage applications and services.

## API

<!--#region ts2md-api-merged-here-->

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

### Interfaces

| | | |
| --- | --- | --- |
| [BaseBlockHeader](#interface-baseblockheader) | [DojoGetTransactionsOptions](#interface-dojogettransactionsoptions) | [DojoSyncMergeParams](#interface-dojosyncmergeparams) |
| [BaseBlockHeaderHex](#interface-baseblockheaderhex) | [DojoGetTransactionsResultApi](#interface-dojogettransactionsresultapi) | [DojoSyncMergeResultApi](#interface-dojosyncmergeresultapi) |
| [BlockHeader](#interface-blockheader) | [DojoIdentityApi](#interface-dojoidentityapi) | [DojoSyncOptionsApi](#interface-dojosyncoptionsapi) |
| [BlockHeaderHex](#interface-blockheaderhex) | [DojoMapiResponseApi](#interface-dojomapiresponseapi) | [DojoSyncUpdateParams](#interface-dojosyncupdateparams) |
| [CertifierDetails](#interface-certifierdetails) | [DojoOutputApi](#interface-dojooutputapi) | [DojoSyncUpdateResultApi](#interface-dojosyncupdateresultapi) |
| [ChaintracksApi](#interface-chaintracksapi) | [DojoOutputBasketApi](#interface-dojooutputbasketapi) | [DojoTransactionApi](#interface-dojotransactionapi) |
| [ChaintracksClientApi](#interface-chaintracksclientapi) | [DojoOutputGenerationApi](#interface-dojooutputgenerationapi) | [DojoTransactionXApi](#interface-dojotransactionxapi) |
| [ChaintracksInfoApi](#interface-chaintracksinfoapi) | [DojoOutputTagApi](#interface-dojooutputtagapi) | [DojoTxInputSelectionApi](#interface-dojotxinputselectionapi) |
| [ChaintracksPackageInfoApi](#interface-chaintrackspackageinfoapi) | [DojoOutputTagMapApi](#interface-dojooutputtagmapapi) | [DojoTxInputsApi](#interface-dojotxinputsapi) |
| [DojoAliasApi](#interface-dojoaliasapi) | [DojoOutputToRedeemApi](#interface-dojooutputtoredeemapi) | [DojoTxLabelApi](#interface-dojotxlabelapi) |
| [DojoAvatarApi](#interface-dojoavatarapi) | [DojoOutputXApi](#interface-dojooutputxapi) | [DojoTxLabelMapApi](#interface-dojotxlabelmapapi) |
| [DojoCertificateApi](#interface-dojocertificateapi) | [DojoPendingTxApi](#interface-dojopendingtxapi) | [DojoUserApi](#interface-dojouserapi) |
| [DojoCertificateFieldApi](#interface-dojocertificatefieldapi) | [DojoPendingTxInputApi](#interface-dojopendingtxinputapi) | [DojoUserStateApi](#interface-dojouserstateapi) |
| [DojoClientApi](#interface-dojoclientapi) | [DojoPendingTxInputInstructionsApi](#interface-dojopendingtxinputinstructionsapi) | [IdentityGroup](#interface-identitygroup) |
| [DojoClientUserApi](#interface-dojoclientuserapi) | [DojoPendingTxOutputApi](#interface-dojopendingtxoutputapi) | [IdentityGroupMember](#interface-identitygroupmember) |
| [DojoCommissionApi](#interface-dojocommissionapi) | [DojoProcessTransactionParams](#interface-dojoprocesstransactionparams) | [LiveBlockHeader](#interface-liveblockheader) |
| [DojoCreateTransactionParams](#interface-dojocreatetransactionparams) | [DojoProcessTransactionResultApi](#interface-dojoprocesstransactionresultapi) | [LiveBlockHeaderHex](#interface-liveblockheaderhex) |
| [DojoCreateTransactionResultApi](#interface-dojocreatetransactionresultapi) | [DojoProvenTxApi](#interface-dojoproventxapi) | [MapiCallbackPayloadApi](#interface-mapicallbackpayloadapi) |
| [DojoCreateTxOutputApi](#interface-dojocreatetxoutputapi) | [DojoProvenTxReqApi](#interface-dojoproventxreqapi) | [MapiPostTxPayloadApi](#interface-mapiposttxpayloadapi) |
| [DojoCreatingTxInputsApi](#interface-dojocreatingtxinputsapi) | [DojoPublicApi](#interface-dojopublicapi) | [MapiTxStatusPayloadApi](#interface-mapitxstatuspayloadapi) |
| [DojoCreatingTxInstructionsApi](#interface-dojocreatingtxinstructionsapi) | [DojoStatsApi](#interface-dojostatsapi) | [MapiTxidReturnResultApi](#interface-mapitxidreturnresultapi) |
| [DojoCreatingTxOutputApi](#interface-dojocreatingtxoutputapi) | [DojoSubmitDirectTransactionApi](#interface-dojosubmitdirecttransactionapi) | [Result](#interface-result) |
| [DojoEntityTimeStampApi](#interface-dojoentitytimestampapi) | [DojoSubmitDirectTransactionOutputApi](#interface-dojosubmitdirecttransactionoutputapi) | [ScriptTemplateParamsSABPPP](#interface-scripttemplateparamssabppp) |
| [DojoFeeModelApi](#interface-dojofeemodelapi) | [DojoSubmitDirectTransactionParams](#interface-dojosubmitdirecttransactionparams) | [Settings](#interface-settings) |
| [DojoGetTotalOfAmountsOptions](#interface-dojogettotalofamountsoptions) | [DojoSubmitDirectTransactionResultApi](#interface-dojosubmitdirecttransactionresultapi) | [SyncDojoConfigBaseApi](#interface-syncdojoconfigbaseapi) |
| [DojoGetTransactionLabelsOptions](#interface-dojogettransactionlabelsoptions) | [DojoSyncApi](#interface-dojosyncapi) | [SyncDojoConfigCloudUrl](#interface-syncdojoconfigcloudurl) |
| [DojoGetTransactionLabelsResultApi](#interface-dojogettransactionlabelsresultapi) | [DojoSyncErrorApi](#interface-dojosyncerrorapi) | [SyncDojoConfigMySqlConnection](#interface-syncdojoconfigmysqlconnection) |
| [DojoGetTransactionOutputsOptions](#interface-dojogettransactionoutputsoptions) | [DojoSyncIdentifyParams](#interface-dojosyncidentifyparams) | [SyncDojoConfigSqliteFile](#interface-syncdojoconfigsqlitefile) |
| [DojoGetTransactionOutputsResultApi](#interface-dojogettransactionoutputsresultapi) | [DojoSyncIdentifyResultApi](#interface-dojosyncidentifyresultapi) | [TrustEvaluatorParams](#interface-trustevaluatorparams) |
| [DojoGetTransactionsBaseOptions](#interface-dojogettransactionsbaseoptions) | [DojoSyncMapApi](#interface-dojosyncmapapi) | [TrxToken](#interface-trxtoken) |

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---

#### Interface: CertifierDetails

```ts
export interface CertifierDetails {
    name: string;
    icon: string;
    note: string;
    publicKey: string;
    trust: number;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: Result

```ts
export interface Result {
    subject: string;
    certifier: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: Settings

```ts
export interface Settings {
    trustThreshold: number;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: TrustEvaluatorParams

```ts
export interface TrustEvaluatorParams {
    settings: Settings;
    certifiers: CertifierDetails[];
    results: Result[];
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: IdentityGroupMember

```ts
export interface IdentityGroupMember {
    certifier: CertifierDetails;
    subject: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: IdentityGroup

```ts
export interface IdentityGroup {
    totalTrust: number;
    members: IdentityGroupMember[];
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: BaseBlockHeader

These are fields of 80 byte serialized header in order whose double sha256 hash is a block's hash value
and the next block's previousHash value.

All block hash values and merkleRoot values are 32 byte Buffer values with the byte order reversed from the serialized byte order.

```ts
export interface BaseBlockHeader {
    version: number;
    previousHash: Buffer;
    merkleRoot: Buffer;
    time: number;
    bits: number;
    nonce: number;
}
```

<details>

<summary>Interface BaseBlockHeader Details</summary>

##### Property bits

Block header bits value. Serialized length is 4 bytes.

```ts
bits: number
```

##### Property merkleRoot

Root hash of the merkle tree of all transactions in this block. Serialized length is 32 bytes.

```ts
merkleRoot: Buffer
```

##### Property nonce

Block header nonce value. Serialized length is 4 bytes.

```ts
nonce: number
```

##### Property previousHash

Hash of previous block's block header. Serialized length is 32 bytes.

```ts
previousHash: Buffer
```

##### Property time

Block header time value. Serialized length is 4 bytes.

```ts
time: number
```

##### Property version

Block header version value. Serialized length is 4 bytes.

```ts
version: number
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: BaseBlockHeaderHex

Like BlockHeader but 32 byte fields are hex encoded strings.

```ts
export interface BaseBlockHeaderHex {
    version: number;
    previousHash: string;
    merkleRoot: string;
    time: number;
    bits: number;
    nonce: number;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: BlockHeader

A `BaseBlockHeader` extended with its computed hash and height in its chain.

```ts
export interface BlockHeader extends BaseBlockHeader {
    height: number;
    hash: Buffer;
}
```

<details>

<summary>Interface BlockHeader Details</summary>

##### Property hash

The double sha256 hash of the serialized `BaseBlockHeader` fields.

```ts
hash: Buffer
```

##### Property height

Height of the header, starting from zero.

```ts
height: number
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: BlockHeaderHex

Like BlockHeader but 32 byte fields are hex encoded strings.

```ts
export interface BlockHeaderHex extends BaseBlockHeaderHex {
    height: number;
    hash: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: LiveBlockHeader

The "live" portion of the block chain is recent history that can conceivably be subject to reorganizations.
The additional fields support tracking orphan blocks, chain forks, and chain reorgs.

```ts
export interface LiveBlockHeader extends BlockHeader {
    chainWork: Buffer;
    isChainTip: boolean;
    isActive: boolean;
    headerId: number;
    previousHeaderId: number | null;
}
```

<details>

<summary>Interface LiveBlockHeader Details</summary>

##### Property chainWork

The cummulative chainwork achieved by the addition of this block to the chain.
Chainwork only matters in selecting the active chain.

```ts
chainWork: Buffer
```

##### Property headerId

As there may be more than one header with identical height values due to orphan tracking,
headers are assigned a unique headerId while part of the "live" portion of the block chain.

```ts
headerId: number
```

##### Property isActive

True only if this header is currently on the active chain.

```ts
isActive: boolean
```

##### Property isChainTip

True only if this header is currently a chain tip. e.g. There is no header that follows it by previousHash or previousHeaderId.

```ts
isChainTip: boolean
```

##### Property previousHeaderId

Every header in the "live" portion of the block chain is linked to an ancestor header through
both its previousHash and previousHeaderId properties.

Due to forks, there may be multiple headers with identical `previousHash` and `previousHeaderId` values.
Of these, only one (the header on the active chain) will have `isActive` === true.

```ts
previousHeaderId: number | null
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: LiveBlockHeaderHex

Like LiveBlockHeader but 32 byte fields are hex encoded strings.

```ts
export interface LiveBlockHeaderHex extends BlockHeaderHex {
    chainWork: string;
    isChainTip: boolean;
    isActive: boolean;
    headerId: number;
    previousHeaderId: number | null;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: ChaintracksPackageInfoApi

```ts
export interface ChaintracksPackageInfoApi {
    name: string;
    version: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: ChaintracksInfoApi

```ts
export interface ChaintracksInfoApi {
    chain: Chain;
    heightBulk: number;
    heightLive: number;
    storageEngine: string;
    bulkStorage: string | undefined;
    bulkIndex: string | undefined;
    bulkIngestors: string[];
    liveIngestors: string[];
    packages: ChaintracksPackageInfoApi[];
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: ChaintracksClientApi

Chaintracks client API excluding events and callbacks

```ts
export interface ChaintracksClientApi {
    getChain(): Promise<Chain>;
    getInfo(): Promise<ChaintracksInfoApi>;
    getPresentHeight(): Promise<number>;
    getHeaders(height: number, count: number): Promise<Buffer>;
    getHeadersHex(height: number, count: number): Promise<string>;
    findChainTipHeader(): Promise<BlockHeader>;
    findChainTipHeaderHex(): Promise<BlockHeaderHex>;
    findChainTipHash(): Promise<Buffer>;
    findChainTipHashHex(): Promise<string>;
    findChainWorkForBlockHash(hash: Buffer | string): Promise<Buffer | undefined>;
    findChainWorkHexForBlockHash(hash: Buffer | string): Promise<string | undefined>;
    findHeaderForBlockHash(hash: Buffer | string): Promise<BlockHeader | undefined>;
    findHeaderHexForBlockHash(hash: Buffer | string): Promise<BlockHeaderHex | undefined>;
    findHeaderForHeight(height: number): Promise<BlockHeader | undefined>;
    findHeaderHexForHeight(height: number): Promise<BlockHeaderHex | undefined>;
    findHeaderForMerkleRoot(merkleRoot: Buffer | string, height?: number): Promise<BlockHeader | undefined>;
    findHeaderHexForMerkleRoot(root: Buffer | string, height?: number): Promise<BlockHeaderHex | undefined>;
    addHeader(header: BaseBlockHeader | BaseBlockHeaderHex): Promise<void>;
    startListening(): Promise<void>;
    listening(): Promise<void>;
    isListening(): Promise<boolean>;
    isSynchronized(): Promise<boolean>;
    subscribeHeaders(listener: HeaderListener): Promise<string>;
    subscribeReorgs(listener: ReorgListener): Promise<string>;
    unsubscribe(subscriptionId: string): Promise<boolean>;
}
```

<details>

<summary>Interface ChaintracksClientApi Details</summary>

##### Method addHeader

Submit a possibly new header for adding

If the header is invalid or a duplicate it will not be added.

This header will be ignored if the previous header has not already been inserted when this header
is considered for insertion.

```ts
addHeader(header: BaseBlockHeader | BaseBlockHeaderHex): Promise<void>
```

Returns

immediately

##### Method findChainTipHash

Returns the block hash of the active chain tip.

```ts
findChainTipHash(): Promise<Buffer>
```

##### Method findChainTipHashHex

Returns the block hash of the active chain tip.

```ts
findChainTipHashHex(): Promise<string>
```

##### Method findChainTipHeader

Returns the active chain tip header

```ts
findChainTipHeader(): Promise<BlockHeader>
```

##### Method findChainTipHeaderHex

Returns the active chain tip header

```ts
findChainTipHeaderHex(): Promise<BlockHeaderHex>
```

##### Method findChainWorkForBlockHash

Only returns a value for headers in live storage.
Returns undefined if `hash` is unknown or in bulk storage.

```ts
findChainWorkForBlockHash(hash: Buffer | string): Promise<Buffer | undefined>
```

Returns

chainwork of block header with given hash

##### Method findChainWorkHexForBlockHash

Only returns a value for headers in live storage.
Returns undefined if `hash` is unknown or in bulk storage.

```ts
findChainWorkHexForBlockHash(hash: Buffer | string): Promise<string | undefined>
```

Returns

chainwork of block header with given hash

##### Method findHeaderForBlockHash

Returns block header for a given block hash

```ts
findHeaderForBlockHash(hash: Buffer | string): Promise<BlockHeader | undefined>
```

Argument Details

+ **hash**
  + block hash

##### Method findHeaderForHeight

Returns block header for a given block height on active chain.

```ts
findHeaderForHeight(height: number): Promise<BlockHeader | undefined>
```

##### Method findHeaderForMerkleRoot

Returns block header for a given possible height and specific merkleRoot
The height, available for all mined blocks, allows fast and compact indexing of
bulk headers.
Confirms that the found header has the request merkleRoot or returns undefined.

```ts
findHeaderForMerkleRoot(merkleRoot: Buffer | string, height?: number): Promise<BlockHeader | undefined>
```

Argument Details

+ **height**
  + optional, may be required for bulk header lookup.

##### Method findHeaderHexForBlockHash

Returns block header for a given block hash

```ts
findHeaderHexForBlockHash(hash: Buffer | string): Promise<BlockHeaderHex | undefined>
```

Argument Details

+ **hash**
  + block hash

##### Method findHeaderHexForHeight

Returns block header for a given block height on active chain.

```ts
findHeaderHexForHeight(height: number): Promise<BlockHeaderHex | undefined>
```

##### Method findHeaderHexForMerkleRoot

Returns block header for a given possible height and specific merkleRoot
The height, available for all mined blocks, allows fast and compact indexing of
bulk headers.
Confirms that the found header has the request merkleRoot or returns undefined.

```ts
findHeaderHexForMerkleRoot(root: Buffer | string, height?: number): Promise<BlockHeaderHex | undefined>
```

Argument Details

+ **height**
  + optional, may be required for bulk header lookup.

##### Method getChain

Confirms the chain

```ts
getChain(): Promise<Chain>
```

##### Method getHeaders

Adds headers in 80 byte serialized format to a buffer.
Only adds active headers.
Buffer length divided by 80 is the actual number returned.

```ts
getHeaders(height: number, count: number): Promise<Buffer>
```

Argument Details

+ **height**
  + of first header
+ **count**
  + of headers, maximum

##### Method getHeadersHex

Adds headers in 80 byte serialized format to a buffer.
Only adds active headers.
Buffer length divided by 80 is the actual number returned.

```ts
getHeadersHex(height: number, count: number): Promise<string>
```

Argument Details

+ **height**
  + of first header
+ **count**
  + of headers, maximum

##### Method getInfo

```ts
getInfo(): Promise<ChaintracksInfoApi>
```

Returns

Summary of configuration and state.

##### Method getPresentHeight

Return the latest chain height from configured bulk ingestors.

```ts
getPresentHeight(): Promise<number>
```

##### Method isListening

Returns true if actively listening for new headers and client api is enabled.

```ts
isListening(): Promise<boolean>
```

##### Method isSynchronized

Returns true if `synchronize` has completed at least once.

```ts
isSynchronized(): Promise<boolean>
```

##### Method listening

Returns a Promise that will resolve when the previous call to startListening
enters the listening-for-new-headers state.

```ts
listening(): Promise<void>
```

##### Method startListening

Start or resume listening for new headers.

Calls `synchronize` to catch up on headers that were found while not listening.

Begins listening to any number of configured new header notification services.

Begins sending notifications to subscribed listeners only after processing any
previously found headers.

May be called if already listening or synchronizing to listen.

The `listening` API function which returns a Promise can be awaited.

```ts
startListening(): Promise<void>
```

##### Method subscribeHeaders

Subscribe to "header" events.

```ts
subscribeHeaders(listener: HeaderListener): Promise<string>
```

Returns

identifier for this subscription

Throws

ERR_NOT_IMPLEMENTED if callback events are not supported

##### Method subscribeReorgs

Subscribe to "reorganization" events.

```ts
subscribeReorgs(listener: ReorgListener): Promise<string>
```

Returns

identifier for this subscription

Throws

ERR_NOT_IMPLEMENTED if callback events are not supported

##### Method unsubscribe

Cancels all subscriptions with the given `subscriptionId` which was previously returned
by a `subscribe` method.

```ts
unsubscribe(subscriptionId: string): Promise<boolean>
```

Returns

true if a subscription was canceled

Argument Details

+ **subscriptionId**
  + value previously returned by subscribeToHeaders or subscribeToReorgs

Throws

ERR_NOT_IMPLEMENTED if callback events are not supported

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: ChaintracksApi

Full Chaintracks API including startListening with callbacks

```ts
export interface ChaintracksApi extends ChaintracksClientApi {
    startListening(listening?: () => void): Promise<void>;
}
```

<details>

<summary>Interface ChaintracksApi Details</summary>

##### Method startListening

Start or resume listening for new headers.

Calls `synchronize` to catch up on headers that were found while not listening.

Begins listening to any number of configured new header notification services.

Begins sending notifications to subscribed listeners only after processing any
previously found headers.

May be called if already listening or synchronizing to listen.

`listening` callback will be called after listening for new live headers has begun.
Alternatively, the `listening` API function which returns a Promise can be awaited.

```ts
startListening(listening?: () => void): Promise<void>
```

Argument Details

+ **listening**
  + callback indicates when listening for new headers has started.

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoPublicApi

Public Dojo Api
No Authrite authentication required.
Not specific to any userId

```ts
export interface DojoPublicApi {
    getChain(): Promise<Chain>;
    stats(): Promise<DojoStatsApi>;
}
```

<details>

<summary>Interface DojoPublicApi Details</summary>

##### Method getChain

Return the chain served by this Dojo

Also serves to verifies that all dependent services are on same chain.

```ts
getChain(): Promise<Chain>
```

##### Method stats

```ts
stats(): Promise<DojoStatsApi>
```

Returns

general storage statistics

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: SyncDojoConfigBaseApi

Each syncDojo config has the following properties:

'dojoType' one of 'Cloud URL' | 'Sqlite File' | 'MySql Connection'
'dojoIdentityKey' the identity key of the syncDojo.
'dojoName' the name of the syncDojo.

```ts
export interface SyncDojoConfigBaseApi {
    dojoType: SyncDojoConfigType;
    dojoIdentityKey: string;
    dojoName?: string;
}
```

<details>

<summary>Interface SyncDojoConfigBaseApi Details</summary>

##### Property dojoIdentityKey

the identity key of the syncDojo.

```ts
dojoIdentityKey: string
```

##### Property dojoName

the name of the syncDojo.

```ts
dojoName?: string
```

##### Property dojoType

one of 'Cloud URL' | 'Sqlite File' | 'MySql Connection' | '<custom>'

```ts
dojoType: SyncDojoConfigType
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: SyncDojoConfigCloudUrl

The derived `SyncDojoConfigCloudUrl` interface adds:

'url' the service URL of the cloud dojo with which to sync

'clientPrivateKey' should be the authenticated user's private key matching their identityKey to enable automatic use of Authrite.

'useIdentityKey' may be set to true instead of using 'clientPrivateKey' if the cloud dojo does not use Authrite for access control.

The cloud dojo must exists and must already be configured with matching dojoIdentityKey.
  
If neither 'clientPrivateKey' or 'useIdentityKey' has a value, will attempt to use the Babbage signing strategy for Authrite.

```ts
export interface SyncDojoConfigCloudUrl extends SyncDojoConfigBaseApi {
    url: string;
    clientPrivateKey?: string;
    useIdentityKey?: boolean;
}
```

<details>

<summary>Interface SyncDojoConfigCloudUrl Details</summary>

##### Property clientPrivateKey

should be the authenticated user's private key matching their identityKey to enable automatic use of Authrite.

```ts
clientPrivateKey?: string
```

##### Property url

the service URL of the cloud dojo with which to sync

```ts
url: string
```

##### Property useIdentityKey

may be set to true instead of using 'clientPrivateKey' if the cloud dojo does not use Authrite for access control.

```ts
useIdentityKey?: boolean
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: SyncDojoConfigMySqlConnection

```ts
export interface SyncDojoConfigMySqlConnection extends SyncDojoConfigBaseApi {
    connection: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: SyncDojoConfigSqliteFile

```ts
export interface SyncDojoConfigSqliteFile extends SyncDojoConfigBaseApi {
    filename: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoIdentityApi

```ts
export interface DojoIdentityApi {
    dojoIdentityKey: string;
    dojoName?: string;
}
```

<details>

<summary>Interface DojoIdentityApi Details</summary>

##### Property dojoIdentityKey

The identity key (public key) assigned to this dojo

```ts
dojoIdentityKey: string
```

##### Property dojoName

The human readable name assigned to this dojo.

```ts
dojoName?: string
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSyncErrorApi

```ts
export interface DojoSyncErrorApi {
    code: string;
    description: string;
    stack?: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSyncMapApi

```ts
export interface DojoSyncMapApi {
    aliasIds: Record<number, number>;
    certificateIds: Record<number, number>;
    commissionIds: Record<number, number>;
    responseIds: Record<number, number>;
    basketIds: Record<number, number>;
    outputIds: Record<number, number>;
    provenTxReqIds: Record<number, number>;
    provenTxIds: Record<number, number>;
    txIds: Record<number, number>;
    txLabelIds: Record<number, number>;
    outputTagIds: Record<number, number>;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSyncIdentifyParams

Receipt of `DojoSyncIdentityParams` via the `syncIdentify` function starts a dojo to dojo sync.

It may also force a restart of the sync protocol.

The purpose of the `Identify` phase is to identify both dojo's to each other,
the identity of the authenticated user, and the last known sync_state.

```ts
export interface DojoSyncIdentifyParams {
    protocolVersion: DojoSyncProtocolVersion;
    userIdentityKey: string;
    dojoIdentityKey: string;
    dojoName?: string;
    refNum: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSyncIdentifyResultApi

```ts
export interface DojoSyncIdentifyResultApi {
    refNum: string;
    identityKey: string;
    name?: string;
    status: DojoSyncStatus;
    when?: Date;
    error?: DojoSyncErrorApi;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSyncUpdateParams

```ts
export interface DojoSyncUpdateParams {
    protocolVersion: DojoSyncProtocolVersion;
    refNum: string;
    since?: Date;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSyncUpdateResultApi

```ts
export interface DojoSyncUpdateResultApi {
    refNum: string;
    status: DojoSyncStatus;
    since?: Date;
    state?: DojoUserStateApi;
    error?: DojoSyncErrorApi;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSyncMergeParams

```ts
export interface DojoSyncMergeParams {
    protocolVersion: DojoSyncProtocolVersion;
    refNum: string;
    when?: Date;
    state?: DojoUserStateApi;
    total?: number;
    iSyncMap?: DojoSyncMapApi;
    error?: DojoSyncErrorApi;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSyncMergeResultApi

```ts
export interface DojoSyncMergeResultApi {
    refNum: string;
    status: DojoSyncStatus;
    iSyncMap?: DojoSyncMapApi;
    error?: DojoSyncErrorApi;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSyncApi

Dojo Sync Protocol

The Dojo Sync Protocol keeps multiple UTXO management services (Dojos) synchronized as updates occur between them.

The protocol relies on the properties of the blockchain to handle specific conflicts.

It is intended to support use cases where there is a primary dojo which periodically synchronizes to backup "syncDojos".

There is no formal conrol within the protocol for determining the primary dojo or transitioning between roles.

Synchronization is initiated from the primary Dojo.

Step 1. Run through the configured syncDojos calling syncIdentify which shares the local dojo and syncDojo's identities.
Any syncDojo that responds is added to activeSyncDojos.

Step 2. Run through the activeSyncDojos calling syncUpdate.

```ts
export interface DojoSyncApi {
    syncIdentify(params: DojoSyncIdentifyParams): Promise<DojoSyncIdentifyResultApi>;
    syncUpdate(params: DojoSyncUpdateParams): Promise<DojoSyncUpdateResultApi>;
    syncMerge(params: DojoSyncMergeParams): Promise<DojoSyncMergeResultApi>;
    authenticate(identityKey?: string, addIfNew?: boolean): Promise<void>;
    getSyncDojoConfig(): Promise<SyncDojoConfigBaseApi>;
}
```

<details>

<summary>Interface DojoSyncApi Details</summary>

##### Method authenticate

For Dojo scenarios where it is permissible for Dojo to directly act as
a specified user, authenticate that user by supplying their identityKey

For Dojo scenarios where authrite is used to authenticate the local user
to a potentially remote Dojo server:
- If identityKey has a value then it used and must match the authenticated value.
- If identityKey is undefined, the authenticated value is used.

Sets userId and identityKey

```ts
authenticate(identityKey?: string, addIfNew?: boolean): Promise<void>
```

Argument Details

+ **identityKey**
  + optional, 33 hex encoded bytes, the user to authenticate's identity key
+ **addIfNew**
  + optional, if true, unknown identityKey is added as new user.

Throws

ERR_UNAUTHORIZED if identityKey is required and invalid

##### Method getSyncDojoConfig

Returns the configuration of this dojo as a syncDojo

```ts
getSyncDojoConfig(): Promise<SyncDojoConfigBaseApi>
```

##### Method syncIdentify

Called to initiate the sync protocol.

This is the initial protocol step to exchange dojo identityKeys and
configure the records in the sync_state and sync_history tables to support the sync protocol.

```ts
syncIdentify(params: DojoSyncIdentifyParams): Promise<DojoSyncIdentifyResultApi>
```

Returns

Equivalent parameters for this syncDojo.

Argument Details

+ **params**
  + Parameters identifying the primary initiating dojo, user, sarting status and protocol version.

##### Method syncMerge

Informs a syncDojo of the result of merging state received from them.

This is the only valid way that the syncDojo's `when` field in `sync_state` is updated which is critical to
guaranteeing that un-merged changes are presented until successfully merged.

```ts
syncMerge(params: DojoSyncMergeParams): Promise<DojoSyncMergeResultApi>
```

##### Method syncUpdate

Receive a state update for the authenticated user from a remote dojo
and respond with merge result and any pre-merge local state update
for the data interval from `since` to `when`

```ts
syncUpdate(params: DojoSyncUpdateParams): Promise<DojoSyncUpdateResultApi>
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSyncOptionsApi

```ts
export interface DojoSyncOptionsApi {
    disableSync?: boolean;
}
```

<details>

<summary>Interface DojoSyncOptionsApi Details</summary>

##### Property disableSync

If true, sync is disabled.

```ts
disableSync?: boolean
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: TrxToken

Place holder for the transaction control object used by actual storage provider implementation.

```ts
export interface TrxToken {
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoClientApi

User specific public Dojo API accessible from all Dojo implementations
including `DojoExpressClient` HTTP client

```ts
export interface DojoClientApi extends DojoPublicApi, DojoSyncApi {
    isDojoExpressClient(): boolean;
    authenticate(identityKey?: string, addIfNew?: boolean): Promise<void>;
    getDojoIdentity(): Promise<DojoIdentityApi>;
    sync(logger?: DojoLoggerApi): Promise<void>;
    setSyncDojosByConfig(syncDojoConfigs: SyncDojoConfigBaseApi[], options?: DojoSyncOptionsApi): Promise<void>;
    getSyncDojosByConfig(): Promise<{
        dojos: SyncDojoConfigBaseApi[];
        options?: DojoSyncOptionsApi;
    }>;
    getUser(): DojoClientUserApi;
    getAvatar(): Promise<DojoAvatarApi>;
    setAvatar(avatar: DojoAvatarApi): Promise<void>;
    getCurrentPaymails(): Promise<string[]>;
    saveCertificate(certificate: DojoCertificateApi): Promise<number>;
    findCertificates(certifiers?: string[], types?: Record<string, string[]>): Promise<DojoCertificateApi[]>;
    getTotalOfUnspentOutputs(basket?: string): Promise<number | undefined>;
    updateOutpointStatus(txid: string, vout: number, spendable: boolean): Promise<void>;
    getTotalOfAmounts(direction: "incoming" | "outgoing", options?: DojoGetTotalOfAmountsOptions): Promise<number>;
    getNetOfAmounts(options?: DojoGetTotalOfAmountsOptions): Promise<number>;
    updateTransactionStatus(reference: string, status: DojoTransactionStatusApi): Promise<void>;
    getTransactions(options?: DojoGetTransactionsOptions): Promise<DojoGetTransactionsResultApi>;
    getTransactionOutputs(options?: DojoGetTransactionOutputsOptions): Promise<DojoGetTransactionOutputsResultApi>;
    getTransactionLabels(options?: DojoGetTransactionLabelsOptions): Promise<DojoGetTransactionLabelsResultApi>;
    getEnvelopeForTransaction(txid: string): Promise<EnvelopeApi | undefined>;
    getEnvelopesOfConflictingTransactions(txid: string): Promise<EnvelopeApi[]>;
    getPendingTransactions(referenceNumber?: string): Promise<DojoPendingTxApi[]>;
    createTransaction(params: DojoCreateTransactionParams): Promise<DojoCreateTransactionResultApi>;
    processTransaction(params: DojoProcessTransactionParams): Promise<DojoProcessTransactionResultApi>;
    submitDirectTransaction(params: DojoSubmitDirectTransactionParams): Promise<DojoSubmitDirectTransactionResultApi>;
    copyState(since?: Date): Promise<DojoUserStateApi>;
    softDeleteCertificate(partial: Partial<DojoCertificateApi>, trx?: TrxToken): Promise<number>;
    softDeleteOutputTag(partial: Partial<DojoOutputTagApi>, trx?: TrxToken): Promise<number>;
    softDeleteTxLabel(partial: Partial<DojoTxLabelApi>, trx?: TrxToken): Promise<number>;
    softDeleteOutputBasket(partial: Partial<DojoOutputBasketApi>, trx?: TrxToken): Promise<number>;
    labelTransaction(txid: string | number | Partial<DojoTransactionApi>, label: string, trx?: TrxToken): Promise<void>;
    unlabelTransaction(txid: string | number | Partial<DojoTransactionApi>, label: string, trx?: TrxToken): Promise<void>;
    tagOutput(partial: Partial<DojoOutputApi>, tag: string, trx?: TrxToken): Promise<void>;
    untagOutput(partial: Partial<DojoOutputApi>, tag: string, trx?: TrxToken): Promise<void>;
    unbasketOutput(partial: Partial<DojoOutputApi>, trx?: TrxToken): Promise<void>;
    getHeight(): Promise<number>;
    getMerkleRootForHeight(height: number): Promise<string | undefined>;
    destroy(): Promise<void>;
}
```

<details>

<summary>Interface DojoClientApi Details</summary>

##### Method authenticate

For Dojo scenarios where it is permissible for Dojo to directly act as
a specified user, authenticate that user by supplying their identityKey

For Dojo scenarios where authrite is used to authenticate the local user
to a potentially remote Dojo server:
- If identityKey has a value then it used and must match the authenticated value.
- If identityKey is undefined, the authenticated value is used.

Sets userId and identityKey

```ts
authenticate(identityKey?: string, addIfNew?: boolean): Promise<void>
```

Argument Details

+ **identityKey**
  + optional, 33 hex encoded bytes, the user to authenticate's identity key
+ **addIfNew**
  + optional, if true, unknown identityKey is added as new user.

Throws

ERR_UNAUTHORIZED if identityKey is required and invalid

##### Method copyState

Return a complete copy of all records for the authenticated user.

```ts
copyState(since?: Date): Promise<DojoUserStateApi>
```

Argument Details

+ **since**
  + optional, start of data interval if specified.

##### Method createTransaction

Constructs a new transaction spending known outputs (inputs) and creating new outputs.

If the inputs to the transaction go beyond what is needed to fund these outputs (plus the transaction fee),
additional Dojo-managed UTXOs will be generated to collect the remainder
(see the "outputGeneration" parameter for more on this).

```ts
createTransaction(params: DojoCreateTransactionParams): Promise<DojoCreateTransactionResultApi>
```

Argument Details

+ **inputs**
  + An object whose keys are TXIDs and whose values are payment envelopes
for external inputs to use when funding this transaction.

If more funding is needed beyond what is given here to pay for the specified outputs
(plus the transaction fee), Dojo will select them from your baskets of unspent outputs
(see the "inputSelection" parameter for more on this).

inputs[TXID]: Must be a payment envelope containing the transaction with output(s)
that will be spent and used as input.

inputs[TXID].outputsToRedeem: An additional field, an array of outputs
from that transaction to be spent.
+ **params.inputSelection**
  + Optional. Algorithmic control over source of additional inputs that may be needed.
+ **params.outputs**
  + Possibly empty, explicit outputs, typically external, to create as part of this transaction.
+ **params.outputGeneration**
  + Optional. Algorithmic control over additional outputs that may be needed.
+ **params.feeModel**
  + Optional. An object representing the fee the transaction will pay.
+ **params.labels**
  + Optional. Each at most 150 characters. Labels can be used to tag transactions into categories
+ **params.note**
  + Optional. A human-readable note detailing this transaction
+ **params.recipient**
  + Optional. The Paymail handle of the recipient of this transaction
+ **params.options**
  + Optional. Processing options.

##### Method destroy

Releases any persistent resources held by this dojo.

No further access must occur after `destroy()` has been called.

```ts
destroy(): Promise<void>
```

##### Method findCertificates

Returns all of the authenticated user's certificates,
where the certifier and type values match one of the optionaly

```ts
findCertificates(certifiers?: string[], types?: Record<string, string[]>): Promise<DojoCertificateApi[]>
```

Argument Details

+ **certifiers**
  + optional array of certifier identifiers, if provided results match at least one value.
+ **types**
  + optional array of certificate types, if provided results match at least one value and only requested fields are returned.

##### Method getAvatar

Returns the name and photo URL of the user

```ts
getAvatar(): Promise<DojoAvatarApi>
```

Returns

The avatar of the user

##### Method getCurrentPaymails

Return array of paymail style identifiers for currently authenticated user in `alias`@`domain` format.

Where `alias` and `domain` come from the aliases table.

and `reservationCompleted` is true

```ts
getCurrentPaymails(): Promise<string[]>
```

##### Method getEnvelopeForTransaction

Returns an Everett Style envelope for the given txid.

A transaction envelope is a tree of inputs where all the leaves are proven transactions.
The trivial case is a single leaf: the envelope for a proven transaction is the rawTx and its proof.

Each branching level of the tree corresponds to an unmined transaction without a proof,
in which case the envelope is:
- rawTx
- mapiResponses from transaction processors (optional)
- inputs object where keys are this transaction's input txids and values are recursive envelope for those txids.

```ts
getEnvelopeForTransaction(txid: string): Promise<EnvelopeApi | undefined>
```

Argument Details

+ **txid**
  + double hash of raw transaction as hex string

##### Method getEnvelopesOfConflictingTransactions

Returns array of Everett Style envelopes for transactions that spend one or
more of the inputs to transaction with `txid`, which must exist in Dojo.

This method supports double spend resolution.

```ts
getEnvelopesOfConflictingTransactions(txid: string): Promise<EnvelopeApi[]>
```

Argument Details

+ **txid**
  + double hash of raw transaction as hex string

##### Method getHeight

Returns the current chain height of the network

```ts
getHeight(): Promise<number>
```

Returns

The current chain height

##### Method getMerkleRootForHeight

A method to verify the validity of a Merkle root for a given block height.

```ts
getMerkleRootForHeight(height: number): Promise<string | undefined>
```

Returns

merkle root for the given height or undefined, if height doesn't have a known merkle root or is invalid.

##### Method getNetOfAmounts

Returns the net sum of transaction amounts belonging to authenticated user,
incoming plus outgoing, as outgoing amounts are negative and incoming amounts are positive.
and optionally matching conditions in `options`.

```ts
getNetOfAmounts(options?: DojoGetTotalOfAmountsOptions): Promise<number>
```

##### Method getPendingTransactions

Returns transactions with status of 'unsigned' or 'unprocessed' for authenticated user

Original Dojo returned only these properties:
  'transactionId',
  'amount',
  'created_at',
  'referenceNumber',
  'senderPaymail',
  'truncatedExternalInputs',
  'status',
  'isOutgoing',
  'rawTransaction'

```ts
getPendingTransactions(referenceNumber?: string): Promise<DojoPendingTxApi[]>
```

Argument Details

+ **referenceNumber**
  + optional referenceNumber to also match

##### Method getTotalOfAmounts

Returns the sum of transaction amounts belonging to authenticated user,
matching the given direction,
and optionally matching conditions in `options`.

```ts
getTotalOfAmounts(direction: "incoming" | "outgoing", options?: DojoGetTotalOfAmountsOptions): Promise<number>
```

##### Method getTotalOfUnspentOutputs

Returns the total of spendable output amounts.

Returns undefined if basket is not undefined and doesn't match an existing basket name.

If basket is not undefined, total is restricted to outputs in that basket.

If basket is undefined, total is over all spendable outputs.

```ts
getTotalOfUnspentOutputs(basket?: string): Promise<number | undefined>
```

Returns

total of unspent outputs in named basket

Argument Details

+ **basket**
  + name of existing outputs basket or undefined

##### Method getTransactionLabels

Returns transaction labels matching options and total matching count available.

```ts
getTransactionLabels(options?: DojoGetTransactionLabelsOptions): Promise<DojoGetTransactionLabelsResultApi>
```

Argument Details

+ **options**
  + limit defaults to 25, offset defaults to 0, order defaults to 'descending'

##### Method getTransactionOutputs

Returns transaction outputs matching options and total matching count available.

```ts
getTransactionOutputs(options?: DojoGetTransactionOutputsOptions): Promise<DojoGetTransactionOutputsResultApi>
```

Argument Details

+ **options**
  + limit defaults to 25, offset defaults to 0, includeEnvelpe defaults to true

##### Method getTransactions

Returns transactions matching options and total matching count available.

```ts
getTransactions(options?: DojoGetTransactionsOptions): Promise<DojoGetTransactionsResultApi>
```

Argument Details

+ **options**
  + limit defaults to 25, offset defaults to 0, addLabels defaults to true, order defaults to 'descending'

##### Method getUser

Returns authenticated user.
Throws an error if isAuthenticated is false.

```ts
getUser(): DojoClientUserApi
```

##### Method isDojoExpressClient

Returns true iff and instance of DojoExpressClient (or derived from it)

```ts
isDojoExpressClient(): boolean
```

##### Method labelTransaction

Labels a transaction

Validates user is authenticated, txid matches an exsiting user transaction, and label value.

Creates new label if necessary.

Adds label to transaction if not already labeled.
Note: previously if transaction was already labeled, an error was thrown.

```ts
labelTransaction(txid: string | number | Partial<DojoTransactionApi>, label: string, trx?: TrxToken): Promise<void>
```

Argument Details

+ **txid**
  + unique transaction identifier, either transactionId, txid, or a partial pattern.
+ **label**
  + the label to be added, will be created if it doesn't already exist

##### Method processTransaction

After creating a transaction with createTransaction and signing it, submit the serialized raw transaction
to transaction processors for processing.

The reference number uniquely identifies the transaction in the database.

Differences from v1:
1. mapi_responses records are created when callbackIDs are generated, they exist before callbackID is given to external transaction processing service.

```ts
processTransaction(params: DojoProcessTransactionParams): Promise<DojoProcessTransactionResultApi>
```

Returns

`DojoProcessTransactionResultApi` with txid and status of 'completed' or 'unknown'

Argument Details

+ **rawTx**
  + The signed transaction serialized as a hex string or Buffer, not yet stored in database.
+ **reference**
  + The reference number that you received from createTransaction uniquely identifying the database record.
+ **outputMap**
  + An object whose keys are change output derivation suffixes
and whose values are the corresponding output (vout) numbers within the transaction.

Throws

ERR_DOJO_INVALID_REFERENCE if reference is unknown

ERR_DOJO_TRANSACTION_REJECTED if processors reject the transaction

ERR_EXTSVS_DOUBLE_SPEND if transaction double spends an input

##### Method saveCertificate

Save a new certificate with optional fields.

certificate must belong to aunthenticated user.

certificate.subject must match authenticated user's idenitityKey or throws ERR_DOJO_CERT_SUBJECT

certificate.signature must be valid or throws ERR_DOJO_CERT_INVALID

If { type, subject, validationKey, serialNumber, userId } already exist, throw ERR_DOJO_CERT_DUPE

```ts
saveCertificate(certificate: DojoCertificateApi): Promise<number>
```

Returns

the certificateId of the new certificate.

##### Method setAvatar

Update the avatar for the authenticated user.

```ts
setAvatar(avatar: DojoAvatarApi): Promise<void>
```

##### Method softDeleteCertificate

Soft deletes a certificate.

```ts
softDeleteCertificate(partial: Partial<DojoCertificateApi>, trx?: TrxToken): Promise<number>
```

Argument Details

+ **partial**
  + The partial certificate data identifying the certificate to soft delete.

##### Method softDeleteOutputBasket

Soft deletes an output basket.

```ts
softDeleteOutputBasket(partial: Partial<DojoOutputBasketApi>, trx?: TrxToken): Promise<number>
```

Argument Details

+ **partial**
  + The partial output basket data identifying the basket to soft delete.

##### Method softDeleteOutputTag

Soft deletes an output tag.

```ts
softDeleteOutputTag(partial: Partial<DojoOutputTagApi>, trx?: TrxToken): Promise<number>
```

Argument Details

+ **partial**
  + The partial output tag data identifying the tag to soft delete.

##### Method softDeleteTxLabel

Soft deletes a transaction label.

```ts
softDeleteTxLabel(partial: Partial<DojoTxLabelApi>, trx?: TrxToken): Promise<number>
```

Argument Details

+ **partial**
  + The partial transaction label data identifying the label to soft delete.

##### Method submitDirectTransaction

This endpoint allows a recipient to submit a transactions that was directly given to them by a sender.

Saves the inputs and key derivation information, allowing the UTXOs to be redeemed in the future.

Sets the transaction to completed and marks the outputs as spendable.

```ts
submitDirectTransaction(params: DojoSubmitDirectTransactionParams): Promise<DojoSubmitDirectTransactionResultApi>
```

##### Method sync

Sync's this dojo's state for the authenticated user with all of the configured syncDojos

This method must be called when either a local or remote state change occurs, or may have occurred.

User state changes are propagated across all configured syncDojos.

```ts
sync(logger?: DojoLoggerApi): Promise<void>
```

Argument Details

+ **logger**
  + optional sync progress update logger

##### Method tagOutput

Tags an output

Validates user is authenticated, partial identifies a single output, and tag value.

Creates new tag if necessary.

Adds tag to output if not already tagged.

```ts
tagOutput(partial: Partial<DojoOutputApi>, tag: string, trx?: TrxToken): Promise<void>
```

Argument Details

+ **partial**
  + unique output identifier as a partial pattern.
+ **tag**
  + the tag to add, will be created if it doesn't already exist

##### Method unbasketOutput

Removes the uniquely identified output's basket assignment.

The output will no longer belong to any basket.

This is typically only useful for outputs that are no longer usefull.

```ts
unbasketOutput(partial: Partial<DojoOutputApi>, trx?: TrxToken): Promise<void>
```

Argument Details

+ **partial**
  + unique output identifier as a partial pattern.

##### Method unlabelTransaction

Removes a label from a transaction

Validates user is authenticated, txid matches an exsiting user transaction, and label already exits.

Does nothing if transaction is not labeled.

```ts
unlabelTransaction(txid: string | number | Partial<DojoTransactionApi>, label: string, trx?: TrxToken): Promise<void>
```

Argument Details

+ **txid**
  + unique transaction identifier, either transactionId, txid, or a partial pattern.
+ **label**
  + the label to be removed from the transaction

##### Method untagOutput

Removes a tag from an output

Validates user is authenticated, partial identifies a single output, and tag already exits.

Does nothing if output is not tagged.

```ts
untagOutput(partial: Partial<DojoOutputApi>, tag: string, trx?: TrxToken): Promise<void>
```

Argument Details

+ **partial**
  + unique output identifier as a partial pattern.
+ **tag**
  + the tag to be removed from the output

##### Method updateOutpointStatus

Update `spendable` of an output that must exist,
belonging to the authenticated user,
in transaction with txid,
at index vout.

```ts
updateOutpointStatus(txid: string, vout: number, spendable: boolean): Promise<void>
```

##### Method updateTransactionStatus

Update transaction status and associated ouputs (both inputs and outputs) spendable and spentBy properties.

Updated transaction userId must match authenticated user and referenceNumber must match reference.

```ts
updateTransactionStatus(reference: string, status: DojoTransactionStatusApi): Promise<void>
```

Argument Details

+ **status**
  + New transaction status.

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoGetTransactionsBaseOptions

```ts
export interface DojoGetTransactionsBaseOptions {
    limit?: number;
    offset?: number;
    order?: DojoRecordOrder;
}
```

<details>

<summary>Interface DojoGetTransactionsBaseOptions Details</summary>

##### Property limit

Optional. How many transactions to return.

```ts
limit?: number
```

##### Property offset

Optional. How many transactions to skip.

```ts
offset?: number
```

##### Property order

Optional. Set sort order of results.

```ts
order?: DojoRecordOrder
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoGetTransactionsOptions

```ts
export interface DojoGetTransactionsOptions extends DojoGetTransactionsBaseOptions {
    columns?: string[];
    referenceNumber?: string;
    status?: DojoTransactionStatusApi | DojoTransactionStatusApi[];
    label?: string;
    startTime?: Date | string | number;
    endTime?: Date | string | number;
    involving?: string;
    addLabels?: boolean;
    addInputsAndOutputs?: boolean;
    includeBasket?: boolean;
    includeTags?: boolean;
    noRawTx?: boolean;
    noScript?: boolean;
    partial?: Partial<DojoTransactionApi>;
}
```

<details>

<summary>Interface DojoGetTransactionsOptions Details</summary>

##### Property addInputsAndOutputs

Optional. If true, include the list of transaction inputs and outputs when retrieving transactions.
Enabling this option adds the 'inputs' and 'outputs' properties to each transaction, providing detailed information about the transaction's inputs and outputs.

```ts
addInputsAndOutputs?: boolean
```

##### Property addLabels

Optional. If true, array of mapped `labels` is added to each transaction.

```ts
addLabels?: boolean
```

##### Property columns

Columns to return for each transaction. If undefined or empty, all columns are returned.

```ts
columns?: string[]
```

##### Property endTime

Optional. Match transactions created on or before this time. Date, ISO string, or seconds since the epoch.

```ts
endTime?: Date | string | number
```

##### Property includeBasket

If true and `addInputsAndOutputs` is true, the `DojoOutputXApi` `basket` property will be included in inputs and outputs.

```ts
includeBasket?: boolean
```

##### Property includeTags

If true and `addInputsAndOutputs` is true, the `DojoOutputXApi` `tags` property will be included in inputs and outputs.

```ts
includeTags?: boolean
```

##### Property involving

Optional. Match transactions with either senderPaymail or recipientPaymail matching this value.

```ts
involving?: string
```

##### Property label

Optional. Match transactions with this label.

```ts
label?: string
```

##### Property noRawTx

If true, excludes rawTransaction values from results.

```ts
noRawTx?: boolean
```

##### Property noScript

If true, excludes outputScript values from results.

```ts
noScript?: boolean
```

##### Property referenceNumber

Optional. Match transactions with this referenceNumber.

```ts
referenceNumber?: string
```

##### Property startTime

Optional. Match transactions created on or after this time. Date, ISO string, or seconds since the epoch.

```ts
startTime?: Date | string | number
```

##### Property status

Optional. Match transactions with this status.

Defaults to ['unproven', 'completed']

```ts
status?: DojoTransactionStatusApi | DojoTransactionStatusApi[]
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoGetTransactionOutputsOptions

```ts
export interface DojoGetTransactionOutputsOptions extends DojoGetTransactionsBaseOptions {
    basket?: string;
    tracked?: boolean;
    spendable?: boolean;
    tags?: string[];
    type?: string;
    includeEnvelope?: boolean;
    includeCustomInstructions?: boolean;
    includeBasket?: boolean;
    includeTags?: boolean;
    tagQueryMode?: "all" | "any";
    noScript?: boolean;
    partial?: Partial<DojoOutputApi>;
}
```

<details>

<summary>Interface DojoGetTransactionOutputsOptions Details</summary>

##### Property basket

If provided, indicates which basket the outputs should be selected from.

```ts
basket?: string
```

##### Property includeBasket

If true, the `DojoOutputXApi` `basket` property will be included in results.

```ts
includeBasket?: boolean
```

##### Property includeCustomInstructions

If provided, returns customInstructions for each output.
Note that includeEnvelope also enables including customInstructions

```ts
includeCustomInstructions?: boolean
```

##### Property includeEnvelope

If provided, returns a structure with the SPV envelopes for the UTXOS that have not been spent.

```ts
includeEnvelope?: boolean
```

##### Property includeTags

If true, the `DojoOutputXApi` `tags` property will be included in results.

```ts
includeTags?: boolean
```

##### Property noScript

if true, outputScript is returned as null. scriptLength and scriptOffset remain valid.

```ts
noScript?: boolean
```

##### Property spendable

If given as true or false, only outputs that have or have not (respectively) been spent will be returned. If not given, both spent and unspent outputs will be returned.

```ts
spendable?: boolean
```

##### Property tagQueryMode

When `tags` contains more than one value, determines if each output returned
must have `all` of the tags or `any` of the tags.

The default is `all`

```ts
tagQueryMode?: "all" | "any"
```

##### Property tags

An optional array of output tag names

```ts
tags?: string[]
```

##### Property tracked

If provided, only outputs with the corresponding tracked value will be returned (true/false).

```ts
tracked?: boolean
```

##### Property type

If provided, only outputs of the specified type will be returned. If not provided, outputs of all types will be returned.

```ts
type?: string
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoGetTransactionsResultApi

```ts
export interface DojoGetTransactionsResultApi {
    txs: DojoTransactionXApi[];
    total: number;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoGetTransactionOutputsResultApi

```ts
export interface DojoGetTransactionOutputsResultApi {
    outputs: DojoOutputXApi[];
    total: number;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoGetTransactionLabelsResultApi

```ts
export interface DojoGetTransactionLabelsResultApi {
    labels: DojoTxLabelApi[];
    total: number;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoGetTransactionLabelsOptions

```ts
export interface DojoGetTransactionLabelsOptions extends DojoGetTransactionsBaseOptions {
    prefix?: string;
    transactionId?: number;
    sortBy?: DojoTransactionLabelsSortBy;
}
```

<details>

<summary>Interface DojoGetTransactionLabelsOptions Details</summary>

##### Property prefix

Optional. Filters labels to include only those starting with the specified prefix.

```ts
prefix?: string
```

##### Property sortBy

Optional. Specify whether to sort by 'label' or 'whenLastUsed'.

```ts
sortBy?: DojoTransactionLabelsSortBy
```

##### Property transactionId

Optional. Filters labels to include only those associated with the specified transaction ID.

```ts
transactionId?: number
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoGetTotalOfAmountsOptions

```ts
export interface DojoGetTotalOfAmountsOptions {
    label?: string;
    startTime?: Date | string | number;
    endTime?: Date | string | number;
    involving?: string;
    direction?: "incoming" | "outgoing";
}
```

<details>

<summary>Interface DojoGetTotalOfAmountsOptions Details</summary>

##### Property direction

Direction of value flow.

```ts
direction?: "incoming" | "outgoing"
```

##### Property endTime

Optional. Match transactions created on or before this time. Seconds since the epoch.

```ts
endTime?: Date | string | number
```

##### Property involving

Optional. Match transactions with either senderPaymail or recipientPaymail matching this value.

```ts
involving?: string
```

##### Property label

Optional. Match transactions with this label.

```ts
label?: string
```

##### Property startTime

Optional. Match transactions created on or after this time. Seconds since the epoch.

```ts
startTime?: Date | string | number
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoStatsApi

```ts
export interface DojoStatsApi {
    users: number;
    transactions: number;
    txLabels: number;
    outputTags: number;
    chain: Chain;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoUserStateApi

```ts
export interface DojoUserStateApi {
    since?: Date;
    user: DojoUserApi;
    certificates: DojoCertificateApi[];
    certificateFields: DojoCertificateFieldApi[];
    commissions: DojoCommissionApi[];
    mapiResponses: DojoMapiResponseApi[];
    outputs: DojoOutputApi[];
    baskets: DojoOutputBasketApi[];
    provenTxReqs: DojoProvenTxReqApi[];
    provenTxs: DojoProvenTxApi[];
    txs: DojoTransactionApi[];
    txLabels: DojoTxLabelApi[];
    txLabelMaps: DojoTxLabelMapApi[];
    outputTags: DojoOutputTagApi[];
    outputTagMaps: DojoOutputTagMapApi[];
}
```

<details>

<summary>Interface DojoUserStateApi Details</summary>

##### Property since

If undefined, this is the complete state for the given `user`.

If a valid `Date`, these are the entities updated since that date.

```ts
since?: Date
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoEntityTimeStampApi

```ts
export interface DojoEntityTimeStampApi {
    created_at?: Date | null;
    updated_at?: Date | null;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoAliasApi

```ts
export interface DojoAliasApi extends DojoEntityTimeStampApi {
    aliasId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    alias: string;
    domain: string;
    avatarName?: string;
    avatarPhotoURL?: string;
    reservationCompleted: boolean;
    userId: number;
    destinationBasketId: number;
}
```

<details>

<summary>Interface DojoAliasApi Details</summary>

##### Property alias

max length of 30

```ts
alias: string
```

##### Property avatarName

max length of 30

```ts
avatarName?: string
```

##### Property avatarPhotoURL

max length of 100

```ts
avatarPhotoURL?: string
```

##### Property domain

max length of 30

```ts
domain: string
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoAvatarApi

```ts
export interface DojoAvatarApi {
    name: string;
    photoURL: string;
}
```

<details>

<summary>Interface DojoAvatarApi Details</summary>

##### Property name

The name of the user

```ts
name: string
```

##### Property photoURL

An HTTPS or UHRP URL to a photo of the user

```ts
photoURL: string
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoCertificateFieldApi

```ts
export interface DojoCertificateFieldApi extends DojoEntityTimeStampApi {
    userId: number;
    certificateId: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    fieldName: string;
    fieldValue: string;
    masterKey: string;
}
```

<details>

<summary>Interface DojoCertificateFieldApi Details</summary>

##### Property fieldName

max length of 100

```ts
fieldName: string
```

##### Property fieldValue

max length of 255

```ts
fieldValue: string
```

##### Property masterKey

base64 encrypted master field revelation key

```ts
masterKey: string
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoCertificateApi

```ts
export interface DojoCertificateApi extends DojoEntityTimeStampApi, CreateCertificateResult {
    certificateId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    userId: number;
    type: string;
    subject: string;
    validationKey: string;
    serialNumber: string;
    certifier: string;
    revocationOutpoint: string;
    signature: string;
    fields?: Record<string, string>;
    masterKeyring?: Record<string, string>;
    isDeleted?: boolean;
}
```

<details>

<summary>Interface DojoCertificateApi Details</summary>

##### Property certifier

max length of 255

```ts
certifier: string
```

##### Property fields

Certificate fields object constructed from fieldName and fieldValue properties of DojoCertificateFieldApi instances associated with this certificate.

```ts
fields?: Record<string, string>
```

##### Property isDeleted

Optional. Indicates whether the certificate is deleted. isDeleted defaults to false.

```ts
isDeleted?: boolean
```

##### Property masterKeyring

Certificate masterKeyring object constructed from fieldName and masterKey properties of DojoCertificateFieldApi instances associated with this certificate.

```ts
masterKeyring?: Record<string, string>
```

##### Property revocationOutpoint

max length of 255

```ts
revocationOutpoint: string
```

##### Property serialNumber

max length of 255

```ts
serialNumber: string
```

##### Property signature

max length of 255

```ts
signature: string
```

##### Property subject

max length of 255

```ts
subject: string
```

##### Property type

max length of 255

```ts
type: string
```

##### Property validationKey

max length of 255

```ts
validationKey: string
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoCommissionApi

```ts
export interface DojoCommissionApi extends DojoEntityTimeStampApi {
    commissionId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    transactionId: number;
    userId: number;
    isRedeemed: boolean;
    keyOffset: string;
    outputScript: Buffer | null;
    satoshis: number;
}
```

<details>

<summary>Interface DojoCommissionApi Details</summary>

##### Property keyOffset

max length of 130

```ts
keyOffset: string
```

##### Property satoshis

15 integer digits

```ts
satoshis: number
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoMapiResponseApi

```ts
export interface DojoMapiResponseApi extends DojoEntityTimeStampApi {
    responseId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    provenTxReqId?: number;
    txid?: string;
    callbackID?: string;
    payload?: string;
    publicKey?: string;
    signature?: string;
    doubleSpendResponse?: string | null;
}
```

<details>

<summary>Interface DojoMapiResponseApi Details</summary>

##### Property doubleSpendResponse

max length of 16

```ts
doubleSpendResponse?: string | null
```

##### Property publicKey

max length of 255

```ts
publicKey?: string
```

##### Property signature

max length of 255

```ts
signature?: string
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoOutputApi

```ts
export interface DojoOutputApi extends DojoEntityTimeStampApi {
    outputId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    spendable: boolean;
    change: boolean;
    txid: string | null;
    vout: number | null;
    amount: number | null;
    outputScript: Buffer | null;
    scriptLength?: number | null;
    scriptOffset?: number | null;
    type: string;
    transactionId: number;
    userId: number;
    basketId?: number | null;
    spentBy: number | null;
    derivationPrefix: string | null;
    derivationSuffix: string | null;
    paymailHandle: string | null;
    senderIdentityKey: string | null;
    customInstructions: string | null;
    tracked: boolean | null;
    providedBy: string | null;
    purpose: string | null;
    description: string | null;
    spendingDescription: string | null;
    envelope?: EnvelopeApi;
}
```

<details>

<summary>Interface DojoOutputApi Details</summary>

##### Property amount

max 15 digits

```ts
amount: number | null
```

##### Property customInstructions

max length of 2500

```ts
customInstructions: string | null
```

##### Property derivationPrefix

max length of 32
base64 encoded

```ts
derivationPrefix: string | null
```

##### Property derivationSuffix

max length of 32
base64 encoded

```ts
derivationSuffix: string | null
```

##### Property description

max length of 255

```ts
description: string | null
```

##### Property envelope

optional envelope for transaction containing output

```ts
envelope?: EnvelopeApi
```

##### Property paymailHandle

max length of 64

```ts
paymailHandle: string | null
```

##### Property providedBy

max length of 130
e.g. you, dojo

```ts
providedBy: string | null
```

##### Property purpose

max length of 20
e.g. change

```ts
purpose: string | null
```

##### Property senderIdentityKey

max length of 130
hex encoded

```ts
senderIdentityKey: string | null
```

##### Property spendingDescription

max length of 255

```ts
spendingDescription: string | null
```

##### Property spentBy

transactionId of spending transaction or null if unspent
max 10 digits

```ts
spentBy: number | null
```

##### Property tracked

true if output was put in a basket for tracking

```ts
tracked: boolean | null
```

##### Property txid

length 64 hex encoded

```ts
txid: string | null
```

##### Property type

max length of 50
e.g. P2PKH, custom

```ts
type: string
```

##### Property vout

max 10 digits

```ts
vout: number | null
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoOutputXApi

```ts
export interface DojoOutputXApi extends DojoOutputApi {
    basket?: DojoOutputBasketApi;
    tags?: DojoOutputTagApi[];
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoOutputBasketApi

```ts
export interface DojoOutputBasketApi extends DojoEntityTimeStampApi {
    basketId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    name: string;
    numberOfDesiredUTXOs: number;
    minimumDesiredUTXOValue: number;
    userId: number;
    isDeleted?: boolean;
}
```

<details>

<summary>Interface DojoOutputBasketApi Details</summary>

##### Property isDeleted

Optional. Indicates whether the basket is deleted. isDeleted defaults to false.

```ts
isDeleted?: boolean
```

##### Property name

max length of 1000

```ts
name: string
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoTransactionApi

```ts
export interface DojoTransactionApi extends DojoEntityTimeStampApi {
    transactionId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    txid: string;
    lockTime?: number | null;
    version?: number | null;
    rawTransaction: Buffer | null;
    status: DojoTransactionStatusApi;
    referenceNumber: string | null;
    amount: number;
    userId: number;
    senderPaymail: string | null;
    recipientPaymail: string | null;
    note: string | null;
    isOutgoing: boolean;
    unconfirmedInputChainLength: number;
    proof: string | null;
    beef: Buffer | null;
    truncatedExternalInputs: string | null;
    provenTxId?: number | null;
    labels?: string[];
}
```

<details>

<summary>Interface DojoTransactionApi Details</summary>

##### Property amount

max 15 digits

```ts
amount: number
```

##### Property isOutgoing

true if transaction originated in this wallet, change returns to it.
false for a transaction created externally and handed in to this wallet.

```ts
isOutgoing: boolean
```

##### Property labels

When not undefined, array of assigned tx_labels.label values.

This is an extended property with data from dependent label entities.

```ts
labels?: string[]
```

##### Property lockTime

Optional. Default is zero.
When the transaction can be processed into a block:
>= 500,000,000 values are interpreted as minimum required unix time stamps in seconds
< 500,000,000 values are interpreted as minimum required block height

```ts
lockTime?: number | null
```

##### Property note

max length of 500

```ts
note: string | null
```

##### Property provenTxId

Is valid when transaction proof record exists in DojoProvenTxApi table.

```ts
provenTxId?: number | null
```

##### Property rawTransaction

When the transaction can be processed into a block:
>= 500,000,000 values are interpreted as minimum required unix time stamps in seconds
< 500,000,000 values are interpreted as minimum required block height

```ts
rawTransaction: Buffer | null
```

##### Property recipientPaymail

max length of 100

```ts
recipientPaymail: string | null
```

##### Property referenceNumber

max length of 64, hex encoded

```ts
referenceNumber: string | null
```

##### Property senderPaymail

max length of 100

```ts
senderPaymail: string | null
```

##### Property status

max length of 64
e.g. completed, failed, unprocessed, unproven, unsigned

```ts
status: DojoTransactionStatusApi
```

##### Property txid

length 64 hex encoded

```ts
txid: string
```

##### Property version

If not undefined, must match value in associated rawTransaction.

```ts
version?: number | null
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoTransactionXApi

```ts
export interface DojoTransactionXApi extends DojoTransactionApi {
    inputs?: DojoOutputXApi[];
    outputs?: DojoOutputXApi[];
}
```

<details>

<summary>Interface DojoTransactionXApi Details</summary>

##### Property inputs

When not undefined, prior outputs now serving as inputs to this transaction
 
 This is an extended property with data from dependent output entities.

```ts
inputs?: DojoOutputXApi[]
```

##### Property outputs

When not undefined, outputs created by this transaction

This is an extended property with data from dependent output entities.

```ts
outputs?: DojoOutputXApi[]
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoProvenTxReqApi

```ts
export interface DojoProvenTxReqApi extends DojoEntityTimeStampApi {
    provenTxReqId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    txid: string;
    callbackID?: string;
    beef?: Buffer | null;
    rawTx?: Buffer;
    history: string;
    notify: string;
    notified: boolean;
    status: DojoProvenTxReqStatusApi;
    attempts: number;
    provenTxId?: number;
}
```

<details>

<summary>Interface DojoProvenTxReqApi Details</summary>

##### Property attempts

Count of how many times a service has been asked about this txid

```ts
attempts: number
```

##### Property history

JSON string of processing history.
Parses to `DojoProvenTxReqHistoryApi`.

```ts
history: string
```

##### Property notified

Set to true when a terminal status has been set and notification has occurred.

```ts
notified: boolean
```

##### Property notify

JSON string of data to drive notifications when this request completes.
Parses to `DojoProvenTxReqNotifyApi`.

```ts
notify: string
```

##### Property provenTxId

Once a DojoProvenTxApi record has been validated and added to database, the provenTxId value.

```ts
provenTxId?: number
```

##### Property status

See `DojoProvenTxReqStatusApi`

```ts
status: DojoProvenTxReqStatusApi
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoProvenTxApi

```ts
export interface DojoProvenTxApi extends DojoEntityTimeStampApi {
    provenTxId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    txid: string;
    height: number;
    index: number;
    nodes: Buffer;
    rawTx: Buffer;
    blockHash: Buffer;
    merkleRoot: Buffer;
}
```

<details>

<summary>Interface DojoProvenTxApi Details</summary>

##### Property nodes

Serialized 32 bytes per node.

```ts
nodes: Buffer
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoTxLabelApi

```ts
export interface DojoTxLabelApi extends DojoEntityTimeStampApi {
    txLabelId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    label: string;
    userId: number;
    whenLastUsed?: Date | null;
    isDeleted?: boolean;
}
```

<details>

<summary>Interface DojoTxLabelApi Details</summary>

##### Property isDeleted

Optional. Indicates whether the label is deleted. isDeleted defaults to false.

```ts
isDeleted?: boolean
```

##### Property label

max length of 150
e.g. babbage_app_..., babbage_protocol_..., babbage_spend_..., babbage_basket_..., babbage_cert_...., babbage_certificate_, nanostore

```ts
label: string
```

##### Property whenLastUsed

valid only when retrieved by with the 'whenLastUsed' sort option.

```ts
whenLastUsed?: Date | null
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoTxLabelMapApi

```ts
export interface DojoTxLabelMapApi extends DojoEntityTimeStampApi {
    created_at?: Date | null;
    updated_at?: Date | null;
    txLabelId: number;
    transactionId: number;
    isDeleted?: boolean;
}
```

<details>

<summary>Interface DojoTxLabelMapApi Details</summary>

##### Property isDeleted

Optional. Indicates whether the label is deleted. isDeleted defaults to false.

```ts
isDeleted?: boolean
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoOutputTagApi

```ts
export interface DojoOutputTagApi extends DojoEntityTimeStampApi {
    outputTagId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    tag: string;
    userId: number;
    isDeleted?: boolean;
}
```

<details>

<summary>Interface DojoOutputTagApi Details</summary>

##### Property isDeleted

Optional. Indicates whether the tag is deleted. isDeleted defaults to false.

```ts
isDeleted?: boolean
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoOutputTagMapApi

```ts
export interface DojoOutputTagMapApi extends DojoEntityTimeStampApi {
    created_at?: Date | null;
    updated_at?: Date | null;
    outputTagId: number;
    outputId: number;
    isDeleted?: boolean;
}
```

<details>

<summary>Interface DojoOutputTagMapApi Details</summary>

##### Property isDeleted

Optional. Indicates whether the tag is deleted. isDeleted defaults to false.

```ts
isDeleted?: boolean
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoClientUserApi

```ts
export interface DojoClientUserApi extends DojoEntityTimeStampApi {
    userId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    identityKey: string;
}
```

<details>

<summary>Interface DojoClientUserApi Details</summary>

##### Property identityKey

max length of 130
hex encoded

```ts
identityKey: string
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoUserApi

```ts
export interface DojoUserApi extends DojoClientUserApi, DojoEntityTimeStampApi {
    userId?: number;
    created_at?: Date | null;
    updated_at?: Date | null;
    identityKey: string;
    timeSpentProcessingRequests?: number;
    bandwidthUsed?: number;
    storageSpaceUsedByHostedData?: number;
}
```

<details>

<summary>Interface DojoUserApi Details</summary>

##### Property bandwidthUsed

max 18 digits

```ts
bandwidthUsed?: number
```

##### Property identityKey

max length of 130
hex encoded

```ts
identityKey: string
```

##### Property storageSpaceUsedByHostedData

max 15 digits

```ts
storageSpaceUsedByHostedData?: number
```

##### Property timeSpentProcessingRequests

max 12 digits

```ts
timeSpentProcessingRequests?: number
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoPendingTxInputInstructionsApi

```ts
export interface DojoPendingTxInputInstructionsApi {
    type: string;
    derivationPrefix: string | null;
    derivationSuffix: string | null;
    paymailHandle: string | null;
    senderIdentityKey: string | null;
    customInstructions: string | null;
}
```

<details>

<summary>Interface DojoPendingTxInputInstructionsApi Details</summary>

##### Property customInstructions

max length of 2500

```ts
customInstructions: string | null
```

##### Property derivationPrefix

max length of 32
base64 encoded

```ts
derivationPrefix: string | null
```

##### Property derivationSuffix

max length of 32
base64 encoded

```ts
derivationSuffix: string | null
```

##### Property paymailHandle

max length of 64

```ts
paymailHandle: string | null
```

##### Property senderIdentityKey

max length of 130
hex encoded

```ts
senderIdentityKey: string | null
```

##### Property type

max length of 50
e.g. P2PKH, custom

```ts
type: string
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoPendingTxInputApi

```ts
export interface DojoPendingTxInputApi extends EnvelopeEvidenceApi {
    outputsToRedeem?: number[];
    instructions?: Record<number, DojoPendingTxInputInstructionsApi>;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoPendingTxOutputApi

```ts
export interface DojoPendingTxOutputApi {
    type: string;
    satoshis: number;
    script?: string;
    derivationPrefix?: string;
    derivationSuffix?: string;
    paymailHandle?: string;
    providedBy?: string;
    purpose?: string;
    senderIdentityKey?: string;
    txid?: string;
    vout?: number;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoPendingTxApi

Return type from Ninja and Dojo getPendingTransactions methods.

```ts
export interface DojoPendingTxApi {
    amount: number;
    created_at: string;
    referenceNumber: string;
    senderPaymail?: string;
    status: string;
    isOutgoing: boolean;
    rawTransaction?: string;
    derivationPrefix?: string;
    paymailHandle?: string;
    inputs: Record<string, DojoPendingTxInputApi>;
    outputs: DojoPendingTxOutputApi[];
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoProcessTransactionParams

Input parameters for Dojo and Ninja processTransaction

```ts
export interface DojoProcessTransactionParams {
    submittedTransaction?: string | Buffer | number[];
    reference?: string;
    inputs?: Record<string, OptionalEnvelopeEvidenceApi>;
    beef?: number[];
    noSendChange?: OutPoint[];
    outputMap?: Record<string, number>;
    options?: CreateActionOptions;
    acceptDelayedBroadcast?: boolean;
    log?: string;
}
```

<details>

<summary>Interface DojoProcessTransactionParams Details</summary>

##### Property acceptDelayedBroadcast

DEPRECATED: Use `options.acceptDelayedBroadcast`

Set to true for normal, high performance operation and offline
operation if running locally.

Always validates `submittedTransaction` and remaining inputs.

If true, creates a self-signed MapiResponse for the transaction
and queues it for repeated broadcast attempts and proof validation.
The `status` of the transaction will be set to `unproven`.

If not true, attempts one broadcast and fails the transaction
if it is not accepted by at least one external transaction processor.
If it is accepted, status is set to `unproven'.
The transaction may still fail at a later time if a merkle
proof is not confirmed.

The transaction status will be set to `completed` or `failed`
depending on the success or failure of broadcast attempts
and Chaintracks validation of a merkle proof.

When status is set to `unproven` or `completed`:
- Inputs are confirmed to be spendable false, spentBy this transaction.
- Outputs are set to spendable true unless already spent (spentBy is non-null).

If the transaction fails, status is set to `failed`:
- Inputs are returned to spendable true, spentBy null
- Outputs are set to spendable false
- If spentBy is non-null, failure propagates to that transaction.

```ts
acceptDelayedBroadcast?: boolean
```

##### Property beef

Supporting evidence for submittedTransaction inputs in serialized BEEF format.

```ts
beef?: number[]
```

##### Property inputs

Supporting evidence for submittedTransaction inputs in `EnvelopeEvidenceApi` format.

```ts
inputs?: Record<string, OptionalEnvelopeEvidenceApi>
```

##### Property log

Optional transaction processing history

```ts
log?: string
```

##### Property noSendChange

Valid for options.noSend true.

Change output(s) that may be forwarded to chained noSend transactions.

```ts
noSendChange?: OutPoint[]
```

##### Property options

Processing options.

```ts
options?: CreateActionOptions
```

##### Property outputMap

An object whose keys are derivation prefixes and whose values are corresponding change output numbers from the transaction.

```ts
outputMap?: Record<string, number>
```

##### Property reference

Unique reference number for submittedTransaciton provided by `createTransaction` or `getTransactionWithOutputs`

```ts
reference?: string
```

##### Property submittedTransaction

The transaction that has been created and signed

```ts
submittedTransaction?: string | Buffer | number[]
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoProcessTransactionResultApi

```ts
export interface DojoProcessTransactionResultApi {
    txid: string;
    transactionId: number;
    status: "sending" | "unproven" | "failed" | "nosend";
    mapiResponses: MapiResponseApi[];
    beef?: number[];
    rawTx?: string;
    inputs?: Record<string, OptionalEnvelopeEvidenceApi>;
    sendWithResults?: DojoSendWithResultsApi[];
    log?: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoOutputToRedeemApi

```ts
export interface DojoOutputToRedeemApi {
    index: number;
    unlockingScriptLength: number;
    spendingDescription?: string;
}
```

<details>

<summary>Interface DojoOutputToRedeemApi Details</summary>

##### Property index

Zero based output index within its transaction to spend.

```ts
index: number
```

##### Property unlockingScriptLength

byte length of unlocking script

Note: To protect client keys and utxo control, unlocking scripts are never shared with Dojo.

```ts
unlockingScriptLength: number
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoTxInputsApi

```ts
export interface DojoTxInputsApi extends OptionalEnvelopeEvidenceApi {
    outputsToRedeem: DojoOutputToRedeemApi[];
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoTxInputSelectionApi

If Dojo needs to select more inputs beyond the ones specified in order to fund the transaction,
this object describes which kinds of inputs can be selected, and from where.

```ts
export interface DojoTxInputSelectionApi {
    disable: boolean;
    baskets: string[];
    maxUnconfirmedChainLength?: number;
    includeSending?: boolean;
}
```

<details>

<summary>Interface DojoTxInputSelectionApi Details</summary>

##### Property baskets

This is an array of UTXO basket names from which UTXOs can be selected for spending.
To only select UTXOs of a certain type, configure the source basket only to accept those types of UTXOs.
By default, UTXOs will only be selected if they are in the "default" basket.

```ts
baskets: string[]
```

##### Property disable

This is a boolean that, when true, will forbid Dojo from adding any additional inputs to your transaction,
beyond what you specified in the "inputs" parameter.
Thus, if you have not sufficiently funded the transaction yourself,
or if the "inputs" array is empty, you will get an error.

```ts
disable: boolean
```

##### Property includeSending

If true, UTXOS from transactions with status 'sending' are included.
Transactions with status 'sending' have not yet been successfully sent to the network.
Their outputs are only acceptable for the `acceptDelayedBroadcast = true` mode of transaction
processing.

```ts
includeSending?: boolean
```

##### Property maxUnconfirmedChainLength

An integer representing the maximum length for any chain of unconfirmed parents
that a selected input can have.
When undefined or -1 (the default), no maximum is specified.
Cannot be zero.
When 1, indicates that the input must itself be confirmed.
When 2, input parents must be confirmed.
When 3 denotes grandparents.
When 4 great-grandparents and so forth.

```ts
maxUnconfirmedChainLength?: number
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoCreateTxOutputApi

A specific output to be created as part of a new transactions.
These outputs can contain custom scripts as specified by recipients.

```ts
export interface DojoCreateTxOutputApi {
    script: string;
    satoshis: number;
    description?: string;
    basket?: string;
    customInstructions?: string;
    tags?: string[];
}
```

<details>

<summary>Interface DojoCreateTxOutputApi Details</summary>

##### Property basket

Destination output basket name for the new UTXO

```ts
basket?: string
```

##### Property customInstructions

Custom spending instructions (metadata, string, optional)

```ts
customInstructions?: string
```

##### Property description

Human-readable output line-item description

```ts
description?: string
```

##### Property satoshis

The amount of the output in satoshis

```ts
satoshis: number
```

##### Property script

The output script that will be included, hex encoded

```ts
script: string
```

##### Property tags

Optional array of output tags to assign to this output.

```ts
tags?: string[]
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoOutputGenerationApi

If Dojo needs to generate additional outputs for the transaction beyond what was specified,
this object describes what kind of outputs to generate, and where they should be kept.

```ts
export interface DojoOutputGenerationApi {
    basket: string;
    method: "auto" | "single";
}
```

<details>

<summary>Interface DojoOutputGenerationApi Details</summary>

##### Property basket

TODO (coming soon).
Specify the basket where the generated outputs will be kept.
Only output types compatible with the destination basket will be generated.

```ts
basket: string
```

##### Property method

The method used to generate outputs.
"auto" (the default) selects the amount and types of generated outputs based on the selected basket's
configuration for how many of each type to keep on hand,
then uses Benford's law to distribute the satoshis across them.
"single" just uses one output, randomly selected from the available types, that contains all the satoshis.

```ts
method: "auto" | "single"
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoFeeModelApi

An object representing the fee the transaction will pay.

```ts
export interface DojoFeeModelApi {
    model: "sat/kb";
    value?: number;
}
```

<details>

<summary>Interface DojoFeeModelApi Details</summary>

##### Property model

The fee model to use, default "sat/kb"

```ts
model: "sat/kb"
```

##### Property value

When "fee.model" is "sat/kb", this is an integer representing the number of satoshis per kb of block space
the transaction will pay in fees.

If undefined, the default value is used which may vary with market conditions.

```ts
value?: number
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoCreateTransactionParams

```ts
export interface DojoCreateTransactionParams {
    outputs: DojoCreateTxOutputApi[];
    inputs?: Record<string, DojoTxInputsApi>;
    inputSelection?: DojoTxInputSelectionApi;
    outputGeneration?: DojoOutputGenerationApi;
    lockTime?: number;
    version?: number;
    feeModel?: DojoFeeModelApi;
    labels?: string[];
    note?: string;
    recipient?: string;
    options?: CreateActionOptions;
    log?: string;
}
```

<details>

<summary>Interface DojoCreateTransactionParams Details</summary>

##### Property feeModel

Optional. An object representing the fee the transaction will pay.

```ts
feeModel?: DojoFeeModelApi
```

##### Property inputSelection

Optional. Algorithmic control over source of additional inputs that may be needed.

```ts
inputSelection?: DojoTxInputSelectionApi
```

##### Property inputs

Optional. Specific inputs to draw on when creating outputs.

```ts
inputs?: Record<string, DojoTxInputsApi>
```

##### Property labels

Optional. Each at most 150 characters. Labels can be used to tag transactions into categories

```ts
labels?: string[]
```

##### Property lockTime

Optional. Default is zero.
When the transaction can be processed into a block:
>= 500,000,000 values are interpreted as minimum required unix time stamps in seconds
< 500,000,000 values are interpreted as minimum required block height

```ts
lockTime?: number
```

##### Property log

Optional transaction processing history

```ts
log?: string
```

##### Property note

Optional. A human-readable note detailing this transaction (Optional)

```ts
note?: string
```

##### Property options

Processing options.

```ts
options?: CreateActionOptions
```

##### Property outputGeneration

Optional. Algorithmic control over additional outputs that may be needed.

```ts
outputGeneration?: DojoOutputGenerationApi
```

##### Property outputs

Possibly empty, explicit outputs, typically external, to create as part of this transaction.

```ts
outputs: DojoCreateTxOutputApi[]
```

##### Property recipient

Optional. The Paymail handle of the recipient of this transaction (Optional)

```ts
recipient?: string
```

##### Property version

If not undefined, must match value in associated rawTransaction.

```ts
version?: number
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoCreatingTxOutputApi

```ts
export interface DojoCreatingTxOutputApi extends DojoCreateTxOutputApi {
    vout: number;
    providedBy: DojoProvidedByApi;
    purpose?: string;
    destinationBasket?: string;
    derivationSuffix?: string;
    keyOffset?: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoCreatingTxInstructionsApi

```ts
export interface DojoCreatingTxInstructionsApi {
    type: string;
    paymailHandle?: string;
    derivationPrefix?: string;
    derivationSuffix?: string;
    senderIdentityKey?: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoCreatingTxInputsApi

```ts
export interface DojoCreatingTxInputsApi extends DojoTxInputsApi {
    providedBy: DojoProvidedByApi;
    instructions: Record<number, DojoCreatingTxInstructionsApi>;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoCreateTransactionResultApi

```ts
export interface DojoCreateTransactionResultApi {
    inputs: Record<string, DojoCreatingTxInputsApi>;
    inputBeef?: number[];
    outputs: DojoCreatingTxOutputApi[];
    noSendChangeOutputVouts?: number[];
    derivationPrefix: string;
    version: number;
    lockTime: number;
    referenceNumber: string;
    note?: string;
    options: CreateActionOptions;
    log?: string;
    paymailHandle?: string;
}
```

<details>

<summary>Interface DojoCreateTransactionResultApi Details</summary>

##### Property inputBeef

This will be a partially valid serialized BEEF value.

Includes proof data for the inputs to the transaction being created.
Some txids may be `known`, either by Dojo or the user, in which case
their rawTx are not included.

It is recommended to the `@babbage/sdk-ts` package's `Beef` class to
deserialize and complete the creation of a valid beef.

```ts
inputBeef?: number[]
```

##### Property paymailHandle

DEPRECATED

```ts
paymailHandle?: string
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSubmitDirectTransactionOutputApi

```ts
export interface DojoSubmitDirectTransactionOutputApi {
    vout: number;
    satoshis: number;
    basket?: string;
    derivationPrefix?: string;
    derivationSuffix?: string;
    customInstructions?: string;
    senderIdentityKey?: string;
    tags?: string[];
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSubmitDirectTransactionApi

```ts
export interface DojoSubmitDirectTransactionApi extends OptionalEnvelopeEvidenceApi {
    outputs: DojoSubmitDirectTransactionOutputApi[];
    referenceNumber?: string;
}
```

<details>

<summary>Interface DojoSubmitDirectTransactionApi Details</summary>

##### Property outputs

sparse array of outputs of interest where indices match vout numbers.

```ts
outputs: DojoSubmitDirectTransactionOutputApi[]
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSubmitDirectTransactionParams

Input parameters to submitDirectTransaction method.

Normally used to receive spendable outputs from an externally
sourced transaction (one created by a party other than this user).
A transaction record is created for this user with isOutgoing false.
New spendable output records are created for the indicated outputs of
the transaction.

When submitDirectTransaction is called with outputs previously
created by the same user on an isOutgoing true transaction,
these params serve to update those outputs and the transaction amount.
The transaction remains isOutgoing true.

When submitDirectTransaction is called again with additional outputs
on previously submitted isOutgoing false transaction,
these params serve to create new outputs and update the transaction amount.
The transaction remains isOutgoing false.

```ts
export interface DojoSubmitDirectTransactionParams {
    protocol?: string;
    transaction: DojoSubmitDirectTransactionApi;
    senderIdentityKey: string;
    note: string;
    labels?: string[];
    derivationPrefix?: string;
    amount?: number;
}
```

<details>

<summary>Interface DojoSubmitDirectTransactionParams Details</summary>

##### Property derivationPrefix

A derivation prefix used for all outputs. If provided, derivation prefixes on all outputs are optional.

```ts
derivationPrefix?: string
```

##### Property labels

Labels to assign to transaction.

```ts
labels?: string[]
```

##### Property note

Human-readable description for the transaction

```ts
note: string
```

##### Property protocol

Specify the transaction submission payment protocol to use.
Currently, the only supported protocol is that with BRFC ID "3241645161d8"

```ts
protocol?: string
```

##### Property senderIdentityKey

Provide the identity key for the person who sent the transaction

```ts
senderIdentityKey: string
```

##### Property transaction

The transaction envelope to submit, including key derivation information.

transaction.outputs is an array of outputs, each containing:
 `vout`,
 `satoshis`,
 `derivationSuffix`,
 and (optionally), `derivationPrefix`.

If a global `derivationPrefix` is used (recommended),
output-specific derivation prefixes should be omitted.

```ts
transaction: DojoSubmitDirectTransactionApi
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: DojoSubmitDirectTransactionResultApi

```ts
export interface DojoSubmitDirectTransactionResultApi {
    transactionId: number;
    referenceNumber: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: MapiTxStatusPayloadApi

As defined in https://github.com/bitcoin-sv-specs/brfc-merchantapi/blob/master/README.md

```ts
export interface MapiTxStatusPayloadApi {
    apiVersion: string;
    timestamp: string;
    txid: string;
    returnResult: string;
    blockHash: string;
    blockHeight: number;
    confirmations: number;
    minerId: string;
    txSecondMempoolExpiry: number;
    merkleProof?: TscMerkleProofApi;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: MapiCallbackPayloadApi

As defined in https://github.com/bitcoin-sv-specs/brfc-merchantapi/blob/master/README.md

```ts
export interface MapiCallbackPayloadApi {
    apiVersion: string;
    timestamp: string;
    blockHash: string;
    blockHeight: number;
    callbackTxId: string;
    callbackReason: string;
    callbackPayload: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: MapiTxidReturnResultApi

Used to parse payloads when only confirmation that a miner acknowledges a specific txid matters.

```ts
export interface MapiTxidReturnResultApi {
    apiVersion?: string;
    timestamp?: string;
    txid: string;
    returnResult: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: MapiPostTxPayloadApi

As defined in https://github.com/bitcoin-sv-specs/brfc-merchantapi/blob/master/README.md

```ts
export interface MapiPostTxPayloadApi {
    apiVersion: string;
    timestamp: string;
    txid: string;
    returnResult: string;
    resultDescription: string;
    minerId: string;
    currentHighestBlockHash?: string;
    currentHighestBlockHeight?: number;
    txSecondMempoolExpiry?: number;
    failureRetryable?: boolean;
    warnings?: unknown[];
    conflictedWith?: unknown[];
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Interface: ScriptTemplateParamsSABPPP

```ts
export interface ScriptTemplateParamsSABPPP {
    derivationPrefix?: string;
    derivationSuffix?: string;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
### Classes

| | | |
| --- | --- | --- |
| [CwiError](#class-cwierror) | [ERR_DOJO_INVALID_REDEEM](#class-err_dojo_invalid_redeem) | [ERR_DOJO_REQUEST_EXPIRED](#class-err_dojo_request_expired) |
| [ERR_BAD_REQUEST](#class-err_bad_request) | [ERR_DOJO_INVALID_REFERENCE](#class-err_dojo_invalid_reference) | [ERR_DOJO_SENDER_SIGNATURE_CHECK](#class-err_dojo_sender_signature_check) |
| [ERR_CHAIN](#class-err_chain) | [ERR_DOJO_INVALID_SATOSHIS](#class-err_dojo_invalid_satoshis) | [ERR_DOJO_SYNC_MERGE](#class-err_dojo_sync_merge) |
| [ERR_CHAIN_INVALID](#class-err_chain_invalid) | [ERR_DOJO_INVALID_SCRIPT](#class-err_dojo_invalid_script) | [ERR_DOJO_SYNC_REFNUM](#class-err_dojo_sync_refnum) |
| [ERR_DOJO_BROADCAST_DUPE](#class-err_dojo_broadcast_dupe) | [ERR_DOJO_INVALID_TIME](#class-err_dojo_invalid_time) | [ERR_DOJO_SYNC_STATE](#class-err_dojo_sync_state) |
| [ERR_DOJO_BROADCAST_FAILED](#class-err_dojo_broadcast_failed) | [ERR_DOJO_INVALID_TRANSACTION_STATUS](#class-err_dojo_invalid_transaction_status) | [ERR_DOJO_SYNC_STATUS](#class-err_dojo_sync_status) |
| [ERR_DOJO_CERT_DUPE](#class-err_dojo_cert_dupe) | [ERR_DOJO_INVALID_TXID](#class-err_dojo_invalid_txid) | [ERR_DOJO_SYNC_TOTAL](#class-err_dojo_sync_total) |
| [ERR_DOJO_CERT_INVALID](#class-err_dojo_cert_invalid) | [ERR_DOJO_INVALID_TX_LABEL](#class-err_dojo_invalid_tx_label) | [ERR_DOJO_TRANSACTION_NOT_FOUND](#class-err_dojo_transaction_not_found) |
| [ERR_DOJO_CERT_SUBJECT](#class-err_dojo_cert_subject) | [ERR_DOJO_INVALID_TX_RECIPIENT](#class-err_dojo_invalid_tx_recipient) | [ERR_DOJO_TRANSACTION_REJECTED](#class-err_dojo_transaction_rejected) |
| [ERR_DOJO_COMPLETED_TX](#class-err_dojo_completed_tx) | [ERR_DOJO_LABEL_NOT_FOUND](#class-err_dojo_label_not_found) | [ERR_DOJO_TX_BAD_AMOUNT](#class-err_dojo_tx_bad_amount) |
| [ERR_DOJO_CREATE_TX_EMPTY](#class-err_dojo_create_tx_empty) | [ERR_DOJO_NOSENDCHANGE](#class-err_dojo_nosendchange) | [ERR_DOJO_UNKNOWN_FEE_MODEL](#class-err_dojo_unknown_fee_model) |
| [ERR_DOJO_FOREIGN_KEY](#class-err_dojo_foreign_key) | [ERR_DOJO_NOT_SUFFICIENT_ACCEPTED_FUNDS](#class-err_dojo_not_sufficient_accepted_funds) | [ERR_DOJO_VALIDATION](#class-err_dojo_validation) |
| [ERR_DOJO_INVALID_BASKET_NAME](#class-err_dojo_invalid_basket_name) | [ERR_DOJO_NOT_SUFFICIENT_FUNDS](#class-err_dojo_not_sufficient_funds) | [ERR_DOUBLE_SPEND](#class-err_double_spend) |
| [ERR_DOJO_INVALID_BEEF](#class-err_dojo_invalid_beef) | [ERR_DOJO_NOT_SUFFICIENT_PROVEN_FUNDS](#class-err_dojo_not_sufficient_proven_funds) | [ERR_INTERNAL](#class-err_internal) |
| [ERR_DOJO_INVALID_CUSTOM_INSTRUCTIONS](#class-err_dojo_invalid_custom_instructions) | [ERR_DOJO_NO_ENVELOPE](#class-err_dojo_no_envelope) | [ERR_INVALID_PARAMETER](#class-err_invalid_parameter) |
| [ERR_DOJO_INVALID_NOTE](#class-err_dojo_invalid_note) | [ERR_DOJO_PAYMAIL_MISMATCH](#class-err_dojo_paymail_mismatch) | [ERR_MISSING_PARAMETER](#class-err_missing_parameter) |
| [ERR_DOJO_INVALID_OUTPOINT](#class-err_dojo_invalid_outpoint) | [ERR_DOJO_PAYMAIL_NOT_FORMATTED_CORRECTLY](#class-err_dojo_paymail_not_formatted_correctly) | [ERR_NOT_IMPLEMENTED](#class-err_not_implemented) |
| [ERR_DOJO_INVALID_OUTPUT_DESCRIPTION](#class-err_dojo_invalid_output_description) | [ERR_DOJO_PAYMAIL_NOT_FOUND](#class-err_dojo_paymail_not_found) | [ERR_TXID_INVALID](#class-err_txid_invalid) |
| [ERR_DOJO_INVALID_OUTPUT_TAG](#class-err_dojo_invalid_output_tag) | [ERR_DOJO_PAYMAIL_UNAVAILABLE](#class-err_dojo_paymail_unavailable) | [ERR_TXID_UNKNOWN](#class-err_txid_unknown) |
| [ERR_DOJO_INVALID_PAYMAIL_DOMAIN](#class-err_dojo_invalid_paymail_domain) | [ERR_DOJO_PROCESS_PENDING_OUTGOING](#class-err_dojo_process_pending_outgoing) | [ERR_UNAUTHORIZED](#class-err_unauthorized) |
| [ERR_DOJO_INVALID_PAYMAIL_HANDLE](#class-err_dojo_invalid_paymail_handle) | [ERR_DOJO_PROVEN_TX](#class-err_dojo_proven_tx) | [ScriptTemplateSABPPP](#class-scripttemplatesabppp) |

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---

#### Class: CwiError

Errors which extend CwiError implement `name` as an alternate getter for `code`,
and `message` as an alternate getter for `description`.

This supports catch handlers that might catch both
`Error` derived or `CwiErrorBase` derived errors.

Derived class constructors should use the derived class name as the value for `code`,
and an internationalizable constant string for `description`.

If a derived class intends to wrap another CwiError, the public property should
be named `cwiError` and will be recovered by `fromUnknown`.

Optionaly, the derived class `description` can include template parameters passed in
to the constructor. See ERR_MISSING_PARAMETER for an example.

To avoid derived class name colisions, packages should include a package specific
identifier after the 'ERR_' prefix. e.g. 'ERR_DOJO_' as the prefix for Dojo specific error
classes.

```ts
export class CwiError extends Error {
    constructor(code: string, description: string, stack?: string, public details?: Record<string, string>) 
    static fromUnknown(err: unknown): CwiError 
    get code(): string 
    set code(v: string) 
    get description(): string 
    set description(v: string) 
    asStatus(): {
        status: string;
        code: string;
        description: string;
    } 
    toJSON_old(): object 
}
```

<details>

<summary>Class CwiError Details</summary>

##### Method asStatus

```ts
asStatus(): {
    status: string;
    code: string;
    description: string;
} 
```

Returns

standard HTTP error status object with status property set to 'error'.

##### Method fromUnknown

Recovers all public fields from CwiError derived error classes and relevant Error derived errors.

Critical client data fields are preserved across HTTP DojoExpress / DojoExpressClient encoding.

```ts
static fromUnknown(err: unknown): CwiError 
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_NOT_IMPLEMENTED

Not implemented.

```ts
export class ERR_NOT_IMPLEMENTED extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_INTERNAL

An internal server error has occurred.

```ts
export class ERR_INTERNAL extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_UNAUTHORIZED

Access is denied due to an authorization error.

```ts
export class ERR_UNAUTHORIZED extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_INVALID_PARAMETER

The ${name} parameter is invalid.

```ts
export class ERR_INVALID_PARAMETER extends CwiError {
    constructor(name: string, mustBe?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_MISSING_PARAMETER

The ${name} parameter is missing, but it must be ${mustBe}.

```ts
export class ERR_MISSING_PARAMETER extends CwiError {
    constructor(name: string, mustBe: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_BAD_REQUEST

The request is invalid.

```ts
export class ERR_BAD_REQUEST extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_CHAIN

Configured chain is invalid or does not match across services.

```ts
export class ERR_CHAIN extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_CHAIN_INVALID

The current chain tip is not in sync with external sources.

```ts
export class ERR_CHAIN_INVALID extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_TXID_INVALID

TXIDs must be 32 bytes encoded as 64 hex digits.

```ts
export class ERR_TXID_INVALID extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_TXID_UNKNOWN

TXID failed to correspond to a known transaction.

```ts
export class ERR_TXID_UNKNOWN extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOUBLE_SPEND

Transaction is a double spend.

This exception includes `spendingTransactions`, an array of transaction envelopes
of conflicting transactions.

```ts
export class ERR_DOUBLE_SPEND extends CwiError {
    constructor(public spendingTransactions: EnvelopeApi[], description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_TX_BAD_AMOUNT

Transaction amount is not correct!

```ts
export class ERR_DOJO_TX_BAD_AMOUNT extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_NOT_SUFFICIENT_FUNDS

Not sufficient funds in the available inputs to cover the cost of the required outputs
and the transaction fee (${moreSatoshisNeeded} more satoshis are needed,
for a total of ${totalSatoshisNeeded}), plus whatever would be required in order
to pay the fee to unlock and spend the outputs used to provide the additional satoshis.

```ts
export class ERR_DOJO_NOT_SUFFICIENT_FUNDS extends CwiError {
    constructor(public totalSatoshisNeeded: number, public moreSatoshisNeeded: number) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_NOT_SUFFICIENT_ACCEPTED_FUNDS

Not sufficient funds in the available inputs to cover the cost of the required outputs
and the transaction fee (${moreSatoshisNeeded} more satoshis are needed,
for a total of ${totalSatoshisNeeded}), plus whatever would be required in order
to pay the fee to unlock and spend the outputs used to provide the additional satoshis.

Accepted funds require at least one transaction processor has accepted broacast of transaction containing each UTXO.

```ts
export class ERR_DOJO_NOT_SUFFICIENT_ACCEPTED_FUNDS extends CwiError {
    constructor(public totalSatoshisNeeded: number, public moreSatoshisNeeded: number) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_NOT_SUFFICIENT_PROVEN_FUNDS

Not sufficient funds in the available inputs to cover the cost of the required outputs
and the transaction fee (${moreSatoshisNeeded} more satoshis are needed,
for a total of ${totalSatoshisNeeded}), plus whatever would be required in order
to pay the fee to unlock and spend the outputs used to provide the additional satoshis.

Proven funds require valid merkle proofs for each UTXO.

```ts
export class ERR_DOJO_NOT_SUFFICIENT_PROVEN_FUNDS extends CwiError {
    constructor(public totalSatoshisNeeded: number, public moreSatoshisNeeded: number) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_UNKNOWN_FEE_MODEL

Transaction was already broadcast.

```ts
export class ERR_DOJO_UNKNOWN_FEE_MODEL extends CwiError {
    constructor(model: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_BROADCAST_DUPE

Transaction was already broadcast.

```ts
export class ERR_DOJO_BROADCAST_DUPE extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_CERT_DUPE

Certificate already exists.

```ts
export class ERR_DOJO_CERT_DUPE extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_CERT_INVALID

Certificate signature is invalid.

```ts
export class ERR_DOJO_CERT_INVALID extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_CERT_SUBJECT

Certificate subject must match authenticated user's identityKey.

```ts
export class ERR_DOJO_CERT_SUBJECT extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_CREATE_TX_EMPTY

Transaction must have at least one input and output.

```ts
export class ERR_DOJO_CREATE_TX_EMPTY extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_NOSENDCHANGE

outputToRedeem is invalid

```ts
export class ERR_DOJO_NOSENDCHANGE extends CwiError {
    constructor(description: string | OutPoint) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_REDEEM

outputToRedeem is invalid

```ts
export class ERR_DOJO_INVALID_REDEEM extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_CUSTOM_INSTRUCTIONS

Output customInstruction must be a string or length not more than 2500.

```ts
export class ERR_DOJO_INVALID_CUSTOM_INSTRUCTIONS extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_OUTPOINT

The outpoint (txid and vout combination) does not belong to a transaction known by this user of the server.

```ts
export class ERR_DOJO_INVALID_OUTPOINT extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_OUTPUT_DESCRIPTION

Output description must be a string or length not more than 255.

```ts
export class ERR_DOJO_INVALID_OUTPUT_DESCRIPTION extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_PAYMAIL_HANDLE

The paymail handle is invalid.

```ts
export class ERR_DOJO_INVALID_PAYMAIL_HANDLE extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_PAYMAIL_DOMAIN

This server is not accepting registrations for new Paymail handles under the specified domain name.

```ts
export class ERR_DOJO_INVALID_PAYMAIL_DOMAIN extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_NOTE

The transaction note is invalid.

```ts
export class ERR_DOJO_INVALID_NOTE extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_REFERENCE

The transaction reference is invalid.

```ts
export class ERR_DOJO_INVALID_REFERENCE extends CwiError {
    constructor(reference?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_SATOSHIS

An amount of satoshis must be a non-negative integer less than 21e14.

```ts
export class ERR_DOJO_INVALID_SATOSHIS extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_SCRIPT

Script must be a valid Bitcoin script.

```ts
export class ERR_DOJO_INVALID_SCRIPT extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_TIME

Time values must be integer number of seconds since the epoch.

```ts
export class ERR_DOJO_INVALID_TIME extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_TRANSACTION_STATUS

The status of this transaction is ${stat}, which is not compatible with this operation. The transaction was not broadcasted by the recipient.

```ts
export class ERR_DOJO_INVALID_TRANSACTION_STATUS extends CwiError {
    constructor(stat: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_BASKET_NAME

Basket names must have one visible character and not more than 1000.

```ts
export class ERR_DOJO_INVALID_BASKET_NAME extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_BEEF

Basket names must have one visible character and not more than 1000.

```ts
export class ERR_DOJO_INVALID_BEEF extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_TX_RECIPIENT

Transaction recipient must be not more than 100.

```ts
export class ERR_DOJO_INVALID_TX_RECIPIENT extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_TX_LABEL

Transaction labels must have one visible character and not more than 150.

```ts
export class ERR_DOJO_INVALID_TX_LABEL extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_OUTPUT_TAG

Output tags must have one visible character and not more than 150.

```ts
export class ERR_DOJO_INVALID_OUTPUT_TAG extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_INVALID_TXID

Transaction labels must have one visible character and not more than 150.

```ts
export class ERR_DOJO_INVALID_TXID extends CwiError {
    constructor(txid: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_LABEL_NOT_FOUND

The label cannot be found linked with your user account.

```ts
export class ERR_DOJO_LABEL_NOT_FOUND extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_PAYMAIL_MISMATCH

This paymail is not the same one used to create the request. The transaction was not broadcasted by the recipient.

```ts
export class ERR_DOJO_PAYMAIL_MISMATCH extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_PAYMAIL_NOT_FORMATTED_CORRECTLY

The provided paymail was not in the correct format.

```ts
export class ERR_DOJO_PAYMAIL_NOT_FORMATTED_CORRECTLY extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_PAYMAIL_NOT_FOUND

This paymail was not found on this server.

```ts
export class ERR_DOJO_PAYMAIL_NOT_FOUND extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_PAYMAIL_UNAVAILABLE

This Paymail handle is unavailable for registration by this server.

```ts
export class ERR_DOJO_PAYMAIL_UNAVAILABLE extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_REQUEST_EXPIRED

The reference you have provided is expired. The transaction was not broadcasted by the recipient.

```ts
export class ERR_DOJO_REQUEST_EXPIRED extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_SENDER_SIGNATURE_CHECK

The signature you provided to authenticate this Paymail sender is not valid.

```ts
export class ERR_DOJO_SENDER_SIGNATURE_CHECK extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_TRANSACTION_NOT_FOUND

The transaction cannot be found linked with your user account.

```ts
export class ERR_DOJO_TRANSACTION_NOT_FOUND extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_TRANSACTION_REJECTED

This transaction was rejected and was not broadcasted by the recipient. Ensure that all specified output scripts are present with the correct amounts assigned to each.

```ts
export class ERR_DOJO_TRANSACTION_REJECTED extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_NO_ENVELOPE

No envelope for ${txid}

```ts
export class ERR_DOJO_NO_ENVELOPE extends CwiError {
    constructor(txid: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_PROCESS_PENDING_OUTGOING

processPendingOuputs of outgoing transactions is not suported at this time.

```ts
export class ERR_DOJO_PROCESS_PENDING_OUTGOING extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_SYNC_STATUS

dojo sync ${step} status expected '${expected}' but received '${actual}'

```ts
export class ERR_DOJO_SYNC_STATUS extends CwiError {
    constructor(step: string, expected: DojoSyncStatus, actual: DojoSyncStatus) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_SYNC_REFNUM

refNum '${expected}' expected, '${actual}' received

```ts
export class ERR_DOJO_SYNC_REFNUM extends CwiError {
    constructor(expected: string, actual: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_SYNC_STATE

missing valid update state from syncDojo

```ts
export class ERR_DOJO_SYNC_STATE extends CwiError {
    constructor() 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_SYNC_TOTAL

sync total '${expected ?? 0}' expected, '${actual ?? 0}' received

```ts
export class ERR_DOJO_SYNC_TOTAL extends CwiError {
    constructor(expected: number | undefined, actual: number | undefined) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_SYNC_MERGE

description || 'Dojo sync merge error.'

```ts
export class ERR_DOJO_SYNC_MERGE extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_FOREIGN_KEY

description || 'Dojo foreign key validation error.'

```ts
export class ERR_DOJO_FOREIGN_KEY extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_VALIDATION

description || 'Dojo validation error.'

```ts
export class ERR_DOJO_VALIDATION extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_BROADCAST_FAILED

description || 'Dojo transaction broadcast failed.'

```ts
export class ERR_DOJO_BROADCAST_FAILED extends CwiError {
    constructor(description?: string) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_COMPLETED_TX

`Update is invalid on completed transaction txid=${asString(txid)}`

```ts
export class ERR_DOJO_COMPLETED_TX extends CwiError {
    constructor(txid: string | Buffer) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ERR_DOJO_PROVEN_TX

`Update is invalid on proven transaction txid=${asString(txid)}`

```ts
export class ERR_DOJO_PROVEN_TX extends CwiError {
    constructor(txid: string | Buffer) 
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Class: ScriptTemplateSABPPP

```ts
export class ScriptTemplateSABPPP implements ScriptTemplate {
    p2pkh: P2PKH;
    protocol: string = "2-3241645161d8";
    constructor(public params: ScriptTemplateParamsSABPPP) 
    invoice(): string 
    lock(lockerPrivKey: string, unlockerPubKey: string): LockingScript 
    unlock(unlockerPrivKey: string, lockerPubKey: string, sourceSatoshis?: number, lockingScript?: Script): {
        sign: (tx: Transaction, inputIndex: number) => Promise<UnlockingScript>;
        estimateLength: (tx: Transaction, inputIndex: number) => Promise<number>;
    } 
}
```

<details>

<summary>Class ScriptTemplateSABPPP Details</summary>

##### Method invoice

Combine inputs per protocol 3241645161d8 to generate an 'invoice' string used for cryptographic key generation.

```ts
invoice(): string 
```

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
### Functions

| | | |
| --- | --- | --- |
| [asBsvSdkPrivateKey](#function-asbsvsdkprivatekey) | [offsetPubKey](#function-offsetpubkey) | [validateOutputTag](#function-validateoutputtag) |
| [asBsvSdkPublickKey](#function-asbsvsdkpublickkey) | [randomBytes](#function-randombytes) | [validateOutputTags](#function-validateoutputtags) |
| [asBsvSdkScript](#function-asbsvsdkscript) | [randomBytesBase64](#function-randombytesbase64) | [validateOutputToRedeem](#function-validateoutputtoredeem) |
| [asBsvSdkTx](#function-asbsvsdktx) | [randomBytesHex](#function-randombyteshex) | [validatePaymail](#function-validatepaymail) |
| [asBuffer](#function-asbuffer) | [randomMinMax](#function-randomminmax) | [validateSABPPPTransaction](#function-validatesabppptransaction) |
| [asString](#function-asstring) | [readVarUint32LE](#function-readvaruint32le) | [validateSatoshis](#function-validatesatoshis) |
| [bitsAreSet](#function-bitsareset) | [restoreUserStateEntities](#function-restoreuserstateentities) | [validateScript](#function-validatescript) |
| [blockHash](#function-blockhash) | [serializeBlockHeader](#function-serializeblockheader) | [validateSecondsSinceEpoch](#function-validatesecondssinceepoch) |
| [computeMerkleTreeParent](#function-computemerkletreeparent) | [sha256Hash](#function-sha256hash) | [validateSubmitDirectCustomTransaction](#function-validatesubmitdirectcustomtransaction) |
| [computeRootFromMerkleProofNodes](#function-computerootfrommerkleproofnodes) | [shuffleArray](#function-shufflearray) | [validateTXID](#function-validatetxid) |
| [convertBufferToUint32](#function-convertbuffertouint32) | [swapByteOrder](#function-swapbyteorder) | [validateTxLabel](#function-validatetxlabel) |
| [convertUint32ToBuffer](#function-convertuint32tobuffer) | [toBaseBlockHeader](#function-tobaseblockheader) | [validateTxLabels](#function-validatetxlabels) |
| [createBabbageServiceChargeOutput](#function-createbabbageservicechargeoutput) | [toBaseBlockHeaderHex](#function-tobaseblockheaderhex) | [validateTxNote](#function-validatetxnote) |
| [deserializeBlockHeader](#function-deserializeblockheader) | [toBlockHeader](#function-toblockheader) | [validateTxRecipient](#function-validatetxrecipient) |
| [doubleSha256BE](#function-doublesha256be) | [toBlockHeaderHex](#function-toblockheaderhex) | [validateUnlockScriptOfChangeOutput](#function-validateunlockscriptofchangeoutput) |
| [doubleSha256HashLE](#function-doublesha256hashle) | [toDojoSyncError](#function-todojosyncerror) | [validateUnlockScriptWithBsvSdk](#function-validateunlockscriptwithbsvsdk) |
| [genesisBuffer](#function-genesisbuffer) | [toLiveBlockHeader](#function-toliveblockheader) | [varUintSize](#function-varuintsize) |
| [genesisHeaderHex](#function-genesisheaderhex) | [toLiveBlockHeaderHex](#function-toliveblockheaderhex) | [verifyBuffer](#function-verifybuffer) |
| [getInputTxIds](#function-getinputtxids) | [transactionInputSize](#function-transactioninputsize) | [verifyBufferEquals](#function-verifybufferequals) |
| [identityKeyFromPrivateKey](#function-identitykeyfromprivatekey) | [transactionOutputSize](#function-transactionoutputsize) | [verifyBufferOrObject](#function-verifybufferorobject) |
| [isBaseBlockHeader](#function-isbaseblockheader) | [transactionSize](#function-transactionsize) | [verifyBufferOrObjectOrNull](#function-verifybufferorobjectornull) |
| [isBaseBlockHeaderHex](#function-isbaseblockheaderhex) | [transformResultsWithTrust](#function-transformresultswithtrust) | [verifyBufferOrObjectOrUndefined](#function-verifybufferorobjectorundefined) |
| [isBlockHeader](#function-isblockheader) | [validateBasketName](#function-validatebasketname) | [verifyId](#function-verifyid) |
| [isBlockHeaderHex](#function-isblockheaderhex) | [validateCreateTxOutput](#function-validatecreatetxoutput) | [verifyNone](#function-verifynone) |
| [isLive](#function-islive) | [validateCustomInstructions](#function-validatecustominstructions) | [verifyNumber](#function-verifynumber) |
| [isLiveBlockHeader](#function-isliveblockheader) | [validateDate](#function-validatedate) | [verifyOne](#function-verifyone) |
| [isLiveBlockHeaderHex](#function-isliveblockheaderhex) | [validateFeeModel](#function-validatefeemodel) | [verifyOneOrNone](#function-verifyoneornone) |
| [lockScriptWithKeyOffsetFromPubKey](#function-lockscriptwithkeyoffsetfrompubkey) | [validateIdentityKey](#function-validateidentitykey) | [verifyTruthy](#function-verifytruthy) |
| [maxDate](#function-maxdate) | [validateInputSelection](#function-validateinputselection) | [wait](#function-wait) |
| [minDate](#function-mindate) | [validateOutputDescription](#function-validateoutputdescription) | [writeVarUint32LE](#function-writevaruint32le) |
| [offsetPrivKey](#function-offsetprivkey) | [validateOutputGeneration](#function-validateoutputgeneration) |  |

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---

#### Function: verifyBuffer

Helper function.

Verifies the value of b is a Buffer and optionally also its length.

```ts
export function verifyBuffer(b: Buffer | undefined | null, length?: number): Buffer 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: verifyBufferEquals

true iff both b1 and b2 are undefined or null, or both are Buffers and are equal.

```ts
export function verifyBufferEquals(b1: Buffer | undefined | null, b2: Buffer | undefined | null): boolean 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: verifyTruthy

Helper function.

Verifies that a possibly optional value has a value.

```ts
export function verifyTruthy<T>(v: T | null | undefined, description?: string): T 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: verifyNumber

Helper function.

Verifies that an optional or null number has a numeric value.

```ts
export function verifyNumber(v: number | null | undefined): number 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: verifyId

Helper function.

Verifies that an optional numeric Id has a value.

```ts
export function verifyId(id: number | undefined | null): number 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: verifyOneOrNone

Helper function.

throws ERR_BAD_REQUEST if results has length greater than one.

```ts
export function verifyOneOrNone<T>(results: T[]): (T | undefined) 
```

<details>

<summary>Function verifyOneOrNone Details</summary>

Returns

results[0] or undefined if length is zero.

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: verifyOne

Helper function.

throws ERR_BAD_REQUEST if results has length other than one.

```ts
export function verifyOne<T>(results: T[], errorDescrition?: string): T 
```

<details>

<summary>Function verifyOne Details</summary>

Returns

results[0].

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: verifyNone

Helper function.

throws ERR_BAD_REQUEST if results has length greater than one.

```ts
export function verifyNone<T>(results: T[]): void 
```

<details>

<summary>Function verifyNone Details</summary>

Returns

results[0] or undefined if length is zero.

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: bitsAreSet

Tests if all `bits` are set in `what`.

```ts
export function bitsAreSet(what: number, bits: number): boolean 
```

<details>

<summary>Function bitsAreSet Details</summary>

Returns

true iff all `bits` are set in `what`

Argument Details

+ **what**
  + value being tested for set bits.
+ **bits**
  + union of bits to test.

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: wait

Returns an await'able Promise that resolves in the given number of msecs.

```ts
export function wait(msecs: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, msecs));
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: randomBytes

```ts
export function randomBytes(count: number): Buffer 
```

<details>

<summary>Function randomBytes Details</summary>

Returns

count cryptographically secure random bytes as Buffer

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: randomBytesHex

```ts
export function randomBytesHex(count: number): string 
```

<details>

<summary>Function randomBytesHex Details</summary>

Returns

count cryptographically secure random bytes as hex encoded string

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: randomBytesBase64

```ts
export function randomBytesBase64(count: number): string 
```

<details>

<summary>Function randomBytesBase64 Details</summary>

Returns

count cryptographically secure random bytes as base64 encoded string

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: randomMinMax

```ts
export function randomMinMax(min: number, max: number): number {
    if (max < min)
        throw new ERR_INVALID_PARAMETER("max", `less than min (${min}). max is (${max})`);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```

<details>

<summary>Function randomMinMax Details</summary>

Returns

a weakly randomized value in the range from min to less than max.

Argument Details

+ **min**
  + minimum value to return
+ **max**
  + greater than maximum value returned

Throws

ERR_INVALID_PARAMETER when max is less than min.

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: shuffleArray

Shuffle an array of items.

This is not a cryptographically strong shuffle.

Run time is O(n)

```ts
export function shuffleArray<T>(array: T[]): T[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
```

<details>

<summary>Function shuffleArray Details</summary>

Returns

original `array` with contents shuffled

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: asBuffer

Coerce a value to Buffer if currently encoded as a string or

```ts
export function asBuffer(val: Buffer | string | number[], encoding?: BufferEncoding): Buffer {
    let b: Buffer;
    if (Buffer.isBuffer(val))
        b = val;
    else if (typeof val === "string")
        b = Buffer.from(val, encoding ?? "hex");
    else
        b = Buffer.from(val);
    return b;
}
```

<details>

<summary>Function asBuffer Details</summary>

Returns

input val if it is a Buffer or new Buffer from string val

Argument Details

+ **val**
  + Buffer or string or number[]. If string, encoding param applies. If number[], Buffer.from constructor is used.
+ **encoding**
  + defaults to 'hex'. Only applies to val of type string

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: asString

Coerce a value to an encoded string if currently a Buffer or number[]

```ts
export function asString(val: Buffer | string | number[], encoding?: BufferEncoding): string {
    if (Array.isArray(val))
        val = Buffer.from(val);
    return Buffer.isBuffer(val) ? val.toString(encoding ?? "hex") : val;
}
```

<details>

<summary>Function asString Details</summary>

Returns

input val if it is a string; or if number[], first converted to Buffer then as Buffer; if Buffer encoded using `encoding`

Argument Details

+ **val**
  + Buffer or string or number[]. If string, encoding param applies. If number[], Buffer.from constructor is used.
+ **encoding**
  + defaults to 'hex'

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: sha256Hash

Calculate the SHA256 hash of a Buffer.

```ts
export function sha256Hash(buffer: Buffer): Buffer {
    return crypto.createHash("sha256").update(buffer).digest();
}
```

<details>

<summary>Function sha256Hash Details</summary>

Returns

sha256 hash of buffer contents.

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: doubleSha256HashLE

Calculate the SHA256 hash of the SHA256 hash of a Buffer.

```ts
export function doubleSha256HashLE(data: string | Buffer, encoding?: BufferEncoding): Buffer {
    return sha256Hash(sha256Hash(asBuffer(data, encoding)));
}
```

<details>

<summary>Function doubleSha256HashLE Details</summary>

Returns

double sha256 hash of buffer contents, byte 0 of hash first.

Argument Details

+ **data**
  + is Buffer or hex encoded string

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: doubleSha256BE

Calculate the SHA256 hash of the SHA256 hash of a Buffer.

```ts
export function doubleSha256BE(data: string | Buffer, encoding?: BufferEncoding): Buffer {
    return doubleSha256HashLE(data, encoding).reverse();
}
```

<details>

<summary>Function doubleSha256BE Details</summary>

Returns

reversed (big-endian) double sha256 hash of data, byte 31 of hash first.

Argument Details

+ **data**
  + is Buffer or hex encoded string

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: swapByteOrder

Returns a copy of a Buffer with byte order reversed.

```ts
export function swapByteOrder(buffer: Buffer): Buffer {
    return Buffer.from(buffer).reverse();
}
```

<details>

<summary>Function swapByteOrder Details</summary>

Returns

new buffer with byte order reversed.

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: convertUint32ToBuffer

```ts
export function convertUint32ToBuffer(num: number, littleEndian = true): Buffer {
    const arr = new ArrayBuffer(4);
    const view = new DataView(arr);
    view.setUint32(0, num, littleEndian);
    return Buffer.from(arr);
}
```

<details>

<summary>Function convertUint32ToBuffer Details</summary>

Returns

four byte buffer with Uint32 number encoded

Argument Details

+ **num**
  + a number value in the Uint32 value range
+ **littleEndian**
  + true for little-endian byte order in Buffer

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: convertBufferToUint32

```ts
export function convertBufferToUint32(buffer: Buffer, littleEndian = true): number {
    const arr = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
    const view = new DataView(arr);
    return view.getUint32(0, littleEndian);
}
```

<details>

<summary>Function convertBufferToUint32 Details</summary>

Returns

a number value in the Uint32 value range

Argument Details

+ **buffer**
  + four byte buffer with Uint32 number encoded
+ **littleEndian**
  + true for little-endian byte order in Buffer

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: varUintSize

Returns the byte size required to encode number as Bitcoin VarUint

```ts
export function varUintSize(val: number): 1 | 3 | 5 | 9 {
    if (val < 0)
        throw new ERR_BAD_REQUEST();
    return (val <= 252 ? 1 : val <= 65535 ? 3 : val <= 4294967295 ? 5 : 9);
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: readVarUint32LE

Reads a Bitcoin VarUInt from buffer at an offset.

Returns updated offset.

```ts
export function readVarUint32LE(buffer: Buffer, offset: number): {
    val: number;
    offset: number;
} {
    const b0 = buffer[offset++];
    switch (b0) {
        case 255:
            throw new Error("Larger than Uint32 value is not supported at this time.");
        case 254:
            return { val: buffer.readUint32LE(offset), offset: offset + 4 };
        case 253:
            return { val: buffer.readUint16LE(offset), offset: offset + 2 };
        default:
            return { val: b0, offset };
    }
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: writeVarUint32LE

Writes a Bitcoin VarUInt to a buffer at an offset.

Returns updated offset.

```ts
export function writeVarUint32LE(val: number, buffer: Buffer, offset: number): number {
    if (val < 0) {
        throw new Error(`val ${val} must be a non-negative integer.`);
    }
    if (val <= 252) {
        buffer[offset] = val;
        return offset + 1;
    }
    if (val <= 65535) {
        buffer[offset] = 253;
        buffer.writeUint16LE(val, offset + 1);
        return offset + 3;
    }
    if (val <= 4294967295) {
        buffer[offset] = 254;
        buffer.writeUint32LE(val, offset + 1);
        return offset + 5;
    }
    throw new Error("Larger than Uint32 value is not supported at this time.");
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: computeRootFromMerkleProofNodes

Computes merkle root from transaction hash and TSC proof data.

Note that it is essential to confirm that the txid is the double sha256 hash of
the transaction.

To prove that txid is the last transaction in its block, at every level,
if computed is left side, then provided must equal computed.

Specification Reference: https://tsc.bitcoinassociation.net/standards/merkle-proof-standardised-format/

```ts
export function computeRootFromMerkleProofNodes(index: number, txid: string | Buffer, nodes: string[] | Buffer): Buffer 
```

<details>

<summary>Function computeRootFromMerkleProofNodes Details</summary>

Returns

computed merkle tree root for comparison to known root.

Argument Details

+ **index**
  + index of transaction being proven in block
+ **txid**
  + hash of transaction being proven
+ **nodes**
  + tip to root, proof provided intermediate hash values

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: computeMerkleTreeParent

Coerce the 32 byte hash value for a merkle tree parent node given its left and right child node hashes.

```ts
export function computeMerkleTreeParent(leftNode: string | Buffer, rightNode: string | Buffer): Buffer {
    const leftConc = Buffer.from(asBuffer(leftNode)).reverse();
    const rightConc = Buffer.from(asBuffer(rightNode)).reverse();
    const concat = Buffer.concat([leftConc, rightConc]);
    const hash = doubleSha256BE(concat);
    return hash;
}
```

<details>

<summary>Function computeMerkleTreeParent Details</summary>

Argument Details

+ **leftNode**
  + 32 byte hash as hex string or Buffer
+ **rightNode**
  + 32 byte hash as hex string or Buffer

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: asBsvSdkTx

Coerce a bsv transaction encoded as a hex string, serialized Buffer, or Transaction to Transaction
If tx is already a Transaction, just return it.

```ts
export function asBsvSdkTx(tx: string | Buffer | Transaction): Transaction {
    if (Buffer.isBuffer(tx)) {
        tx = Transaction.fromHex(asString(tx));
    }
    else if (typeof tx === "string") {
        tx = Transaction.fromHex(tx);
    }
    return tx;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: asBsvSdkScript

Coerce a bsv script encoded as a hex string, serialized Buffer, or Script to Script
If script is already a Script, just return it.

```ts
export function asBsvSdkScript(script: string | Buffer | Script): Script {
    if (Buffer.isBuffer(script)) {
        script = Script.fromHex(asString(script));
    }
    else if (typeof script === "string") {
        script = Script.fromHex(script);
    }
    return script;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: asBsvSdkPrivateKey

```ts
export function asBsvSdkPrivateKey(privKey: string): PrivateKey 
```

<details>

<summary>Function asBsvSdkPrivateKey Details</summary>

Argument Details

+ **privKey**
  + bitcoin private key in 32 byte hex string form

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: asBsvSdkPublickKey

```ts
export function asBsvSdkPublickKey(pubKey: string): PublicKey 
```

<details>

<summary>Function asBsvSdkPublickKey Details</summary>

Argument Details

+ **pubKey**
  + bitcoin public key in standard compressed key hex string form

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: getInputTxIds

For a bitcoin transaction in hex string, Buffer or parsed Transaction form,

returns deduplicated array of the input's outpoint transaction hashes (txids).

```ts
export function getInputTxIds(tx: string | Buffer | Transaction): string[] {
    tx = asBsvSdkTx(tx);
    const txids = {};
    for (const input of tx.inputs) {
        txids[verifyTruthy(input.sourceTXID)] = true;
    }
    return Object.keys(txids);
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: identityKeyFromPrivateKey

Returns the Identity Key value associated with a private key.

```ts
export function identityKeyFromPrivateKey(privKey: string): string 
```

<details>

<summary>Function identityKeyFromPrivateKey Details</summary>

Returns

hex encoded Identity Key.

Argument Details

+ **privKey**
  + as hex encoded 32 byte value

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: maxDate

returns most recent of two dates or undefined if both are null or undefined.

```ts
export function maxDate(d1: Date | null | undefined, d2: Date | null | undefined): Date | undefined {
    if (d1 == null)
        return (d2 != null) ? d2 : undefined;
    if (d2 == null)
        return (d1 != null) ? d1 : undefined;
    return d1 > d2 ? d1 : d2;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: minDate

returns least recent of two dates or undefined if either date is null or undefined.

```ts
export function minDate(d1: Date | null | undefined, d2: Date | null | undefined): Date | undefined {
    if (d1 == null || d2 == null)
        return undefined;
    return d1 < d2 ? d1 : d2;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: transformResultsWithTrust

Helper function for evaluating if an entity meets the trust threshold of the user

```ts
export function transformResultsWithTrust({ settings, certifiers, results }: TrustEvaluatorParams) 
```

<details>

<summary>Function transformResultsWithTrust Details</summary>

Argument Details

+ **obj**
  + all params given in an object

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: isLive

Type guard function.

```ts
export function isLive(header: BlockHeader | LiveBlockHeader): header is LiveBlockHeader {
    return (header as LiveBlockHeader).headerId !== undefined;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: isBaseBlockHeader

Type guard function.

```ts
export function isBaseBlockHeader(header: BaseBlockHeader | BlockHeader | LiveBlockHeader | BaseBlockHeaderHex | BlockHeaderHex | LiveBlockHeaderHex): header is BaseBlockHeader {
    return Buffer.isBuffer(header.previousHash);
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: isBlockHeader

Type guard function.

```ts
export function isBlockHeader(header: BaseBlockHeader | BlockHeader | LiveBlockHeader | BaseBlockHeaderHex | BlockHeaderHex | LiveBlockHeaderHex): header is LiveBlockHeader {
    return ("height" in header) && Buffer.isBuffer(header.previousHash);
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: isLiveBlockHeader

Type guard function.

```ts
export function isLiveBlockHeader(header: BaseBlockHeader | BlockHeader | LiveBlockHeader | BaseBlockHeaderHex | BlockHeaderHex | LiveBlockHeaderHex): header is LiveBlockHeader {
    return "chainwork" in header && Buffer.isBuffer(header.previousHash);
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: isBaseBlockHeaderHex

Type guard function.

```ts
export function isBaseBlockHeaderHex(header: BaseBlockHeader | BlockHeader | LiveBlockHeader | BaseBlockHeaderHex | BlockHeaderHex | LiveBlockHeaderHex): header is BaseBlockHeaderHex {
    return (typeof header.previousHash === "string");
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: isBlockHeaderHex

Type guard function.

```ts
export function isBlockHeaderHex(header: BaseBlockHeader | BlockHeader | LiveBlockHeader | BaseBlockHeaderHex | BlockHeaderHex | LiveBlockHeaderHex): header is BlockHeaderHex {
    return ("height" in header) && (typeof header.previousHash === "string");
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: isLiveBlockHeaderHex

Type guard function.

```ts
export function isLiveBlockHeaderHex(header: BaseBlockHeader | BlockHeader | LiveBlockHeader | BaseBlockHeaderHex | BlockHeaderHex | LiveBlockHeaderHex): header is LiveBlockHeaderHex {
    return "chainwork" in header && (typeof header.previousHash === "string");
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: toBaseBlockHeaderHex

Type conversion function.

```ts
export function toBaseBlockHeaderHex(header: BaseBlockHeader | BlockHeader | LiveBlockHeader): BaseBlockHeaderHex {
    return {
        version: header.version,
        previousHash: asString(header.previousHash),
        merkleRoot: asString(header.merkleRoot),
        time: header.time,
        bits: header.bits,
        nonce: header.nonce
    };
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: toBlockHeaderHex

Type conversion function.

```ts
export function toBlockHeaderHex(header: BlockHeader | LiveBlockHeader): BlockHeaderHex {
    return {
        version: header.version,
        previousHash: asString(header.previousHash),
        merkleRoot: asString(header.merkleRoot),
        time: header.time,
        bits: header.bits,
        nonce: header.nonce,
        height: header.height,
        hash: asString(header.hash)
    };
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: toLiveBlockHeaderHex

Type conversion function.

```ts
export function toLiveBlockHeaderHex(header: LiveBlockHeader): LiveBlockHeaderHex {
    return {
        ...header,
        previousHash: asString(header.previousHash),
        merkleRoot: asString(header.merkleRoot),
        hash: asString(header.hash),
        chainWork: asString(header.chainWork)
    };
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: toBaseBlockHeader

Type conversion function.

```ts
export function toBaseBlockHeader(header: BaseBlockHeaderHex | BlockHeaderHex | LiveBlockHeaderHex): BaseBlockHeader {
    return {
        version: header.version,
        previousHash: asBuffer(header.previousHash),
        merkleRoot: asBuffer(header.merkleRoot),
        time: header.time,
        bits: header.bits,
        nonce: header.nonce
    };
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: toBlockHeader

Type conversion function.

```ts
export function toBlockHeader(header: BlockHeaderHex | LiveBlockHeaderHex): BlockHeader {
    return {
        version: header.version,
        previousHash: asBuffer(header.previousHash),
        merkleRoot: asBuffer(header.merkleRoot),
        time: header.time,
        bits: header.bits,
        nonce: header.nonce,
        height: header.height,
        hash: asBuffer(header.hash)
    };
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: toLiveBlockHeader

Type conversion function.

```ts
export function toLiveBlockHeader(header: LiveBlockHeaderHex): LiveBlockHeader {
    return {
        ...header,
        previousHash: asBuffer(header.previousHash),
        merkleRoot: asBuffer(header.merkleRoot),
        hash: asBuffer(header.hash),
        chainWork: asBuffer(header.chainWork)
    };
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: toDojoSyncError

```ts
export function toDojoSyncError(e: CwiError): DojoSyncErrorApi 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: blockHash

Computes double sha256 hash of bitcoin block header
bytes are reversed to bigendian order

If header is a Buffer, it is required to 80 bytes long
and in standard block header serialized encoding.

```ts
export function blockHash(header: BaseBlockHeader | Buffer): Buffer {
    const data = !Buffer.isBuffer(header) ? serializeBlockHeader(header) : header;
    if (data.length !== 80)
        throw new Error("Block header must be 80 bytes long.");
    return doubleSha256HashLE(data).reverse();
}
```

<details>

<summary>Function blockHash Details</summary>

Returns

doule sha256 hash of header bytes reversed

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: serializeBlockHeader

Serializes a block header as an 80 byte Buffer.
The exact serialized format is defined in the Bitcoin White Paper
such that computing a double sha256 hash of the buffer computes
the block hash for the header.

```ts
export function serializeBlockHeader(header: BaseBlockHeader, buffer?: Buffer, offset?: number): Buffer {
    if (buffer != null) {
        offset ||= 0;
        buffer.writeUInt32LE(header.version, offset);
        swapByteOrder(header.previousHash).copy(buffer, offset + 4, 0, 32);
        swapByteOrder(header.merkleRoot).copy(buffer, offset + 36, 0, 32);
        buffer.writeUInt32LE(header.time, offset + 68);
        buffer.writeUInt32LE(header.bits, offset + 72);
        buffer.writeUInt32LE(header.nonce, offset + 76);
        return buffer.subarray(offset, offset + 80);
    }
    else {
        const data = Buffer.concat([
            convertUint32ToBuffer(header.version),
            swapByteOrder(header.previousHash),
            swapByteOrder(header.merkleRoot),
            convertUint32ToBuffer(header.time),
            convertUint32ToBuffer(header.bits),
            convertUint32ToBuffer(header.nonce)
        ]);
        return data;
    }
}
```

<details>

<summary>Function serializeBlockHeader Details</summary>

Returns

80 byte Buffer

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: deserializeBlockHeader

Deserialize a block header from an 80 byte buffer

```ts
export function deserializeBlockHeader(buffer: Buffer, offset = 0): BaseBlockHeader {
    const header: BaseBlockHeader = {
        version: convertBufferToUint32(buffer.subarray(0 + offset, 4 + offset)),
        previousHash: swapByteOrder(buffer.subarray(4 + offset, 36 + offset)),
        merkleRoot: swapByteOrder(buffer.subarray(36 + offset, 68 + offset)),
        time: convertBufferToUint32(buffer.subarray(68 + offset, 72 + offset)),
        bits: convertBufferToUint32(buffer.subarray(72 + offset, 76 + offset)),
        nonce: convertBufferToUint32(buffer.subarray(76 + offset, 80 + offset))
    };
    return header;
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: genesisHeaderHex

Returns the genesis block for the specified chain.

```ts
export function genesisHeaderHex(chain: Chain): BlockHeaderHex {
    return chain === "main"
        ? {
            version: 1,
            previousHash: "0000000000000000000000000000000000000000000000000000000000000000",
            merkleRoot: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
            time: 1231006505,
            bits: 486604799,
            nonce: 2083236893,
            height: 0,
            hash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"
        }
        : {
            version: 1,
            previousHash: "0000000000000000000000000000000000000000000000000000000000000000",
            merkleRoot: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
            time: 1296688602,
            bits: 486604799,
            nonce: 414098458,
            height: 0,
            hash: "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943"
        };
}
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: genesisBuffer

Returns the genesis block for the specified chain.

```ts
export function genesisBuffer(chain: Chain): Buffer { return serializeBlockHeader(toBlockHeader(genesisHeaderHex(chain))); }
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: transactionInputSize

```ts
export function transactionInputSize(scriptSize: number): number 
```

<details>

<summary>Function transactionInputSize Details</summary>

Returns

serialized byte length a transaction input

Argument Details

+ **scriptSize**
  + byte length of input script

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: transactionOutputSize

```ts
export function transactionOutputSize(scriptSize: number): number 
```

<details>

<summary>Function transactionOutputSize Details</summary>

Returns

serialized byte length a transaction output

Argument Details

+ **scriptSize**
  + byte length of output script

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: transactionSize

Compute the serialized binary transaction size in bytes
given the number of inputs and outputs,
and the size of each script.

```ts
export function transactionSize(inputs: number[], outputs: number[]): number 
```

<details>

<summary>Function transactionSize Details</summary>

Returns

total transaction size in bytes

Argument Details

+ **inputs**
  + array of input script lengths, in bytes
+ **outputs**
  + array of output script lengths, in bytes

</details>

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: offsetPrivKey

```ts
export function offsetPrivKey(privKey: string, keyOffset?: string): {
    offsetPrivKey: string;
    keyOffset: string;
} 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: offsetPubKey

```ts
export function offsetPubKey(pubKey: string, keyOffset?: string): {
    offsetPubKey: string;
    keyOffset: string;
} 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: lockScriptWithKeyOffsetFromPubKey

```ts
export function lockScriptWithKeyOffsetFromPubKey(pubKey: string, keyOffset?: string): {
    script: string;
    keyOffset: string;
} 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: createBabbageServiceChargeOutput

```ts
export function createBabbageServiceChargeOutput(fee = 200): {
    script: string;
    satoshis: number;
    keyOffset: string;
} 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: verifyBufferOrObject

Buffers sent across HTTP may not be restored correctly.

Detect these situations and restore and Buffers.

```ts
export function verifyBufferOrObject(v: Buffer | object): Buffer 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: verifyBufferOrObjectOrNull

```ts
export function verifyBufferOrObjectOrNull(v: Buffer | object | null): Buffer | null 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: verifyBufferOrObjectOrUndefined

```ts
export function verifyBufferOrObjectOrUndefined(v: Buffer | object | undefined): Buffer | undefined 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: restoreUserStateEntities

Entities sent across HTTP may not have Date and Buffer properties restored correctly.

Detect these situations and restore contained values as Dates and Buffers.

```ts
export function restoreUserStateEntities(state: DojoUserStateApi): void 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateIdentityKey

```ts
export function validateIdentityKey(identityKey?: string | null): string 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateTXID

```ts
export function validateTXID(txid: string): void 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateBasketName

```ts
export function validateBasketName(name: string): string 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateTxRecipient

```ts
export function validateTxRecipient(recipient?: string): string | undefined 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateTxNote

```ts
export function validateTxNote(note?: string): string | undefined 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateCustomInstructions

```ts
export function validateCustomInstructions(s: string): string 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateOutputDescription

```ts
export function validateOutputDescription(s: string): string 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateCreateTxOutput

```ts
export function validateCreateTxOutput(o: DojoCreateTxOutputApi): void 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateSecondsSinceEpoch

```ts
export function validateSecondsSinceEpoch(time: number): Date 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateDate

```ts
export function validateDate(date: Date | string | number | null | undefined): Date | undefined 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateSatoshis

```ts
export function validateSatoshis(satoshis: number): void 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateScript

```ts
export function validateScript(script: string): void 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateInputSelection

```ts
export function validateInputSelection(v: DojoTxInputSelectionApi | undefined): DojoTxInputSelectionApi 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateOutputGeneration

```ts
export function validateOutputGeneration(v: DojoOutputGenerationApi | undefined): DojoOutputGenerationApi 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateTxLabel

```ts
export function validateTxLabel(label: string): string 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateTxLabels

```ts
export function validateTxLabels(v?: string[]): string[] 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateOutputTag

```ts
export function validateOutputTag(tag: string): string 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateOutputTags

```ts
export function validateOutputTags(v?: string[]): string[] 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateFeeModel

```ts
export function validateFeeModel(v?: DojoFeeModelApi): DojoFeeModelApi 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateOutputToRedeem

```ts
export function validateOutputToRedeem(output: DojoOutputToRedeemApi): void 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validatePaymail

```ts
export function validatePaymail(paymailHandle: string | null): void 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateSABPPPTransaction

```ts
export function validateSABPPPTransaction(transaction: DojoSubmitDirectTransactionApi): DojoSubmitDirectTransactionApi 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateSubmitDirectCustomTransaction

```ts
export function validateSubmitDirectCustomTransaction(transaction: DojoSubmitDirectTransactionApi): DojoSubmitDirectTransactionApi 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateUnlockScriptWithBsvSdk

```ts
export function validateUnlockScriptWithBsvSdk(spendingTx: Transaction | number[] | Buffer | string, vin: number, lockingScript: Script | number[] | Buffer | string, amount: number): boolean 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Function: validateUnlockScriptOfChangeOutput

```ts
export async function validateUnlockScriptOfChangeOutput(output: DojoOutputApi, privateKey: string): Promise<CwiError | undefined> 
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
### Types

| |
| --- |
| [Chain](#type-chain) |
| [DojoLoggerApi](#type-dojologgerapi) |
| [DojoProvenTxReqStatusApi](#type-dojoproventxreqstatusapi) |
| [DojoProvidedByApi](#type-dojoprovidedbyapi) |
| [DojoRecordOrder](#type-dojorecordorder) |
| [DojoSyncProtocolVersion](#type-dojosyncprotocolversion) |
| [DojoSyncStatus](#type-dojosyncstatus) |
| [DojoTransactionLabelsSortBy](#type-dojotransactionlabelssortby) |
| [DojoTransactionStatusApi](#type-dojotransactionstatusapi) |
| [HeaderListener](#type-headerlistener) |
| [ReorgListener](#type-reorglistener) |
| [SyncDojoConfigType](#type-syncdojoconfigtype) |

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---

#### Type: Chain

```ts
export type Chain = "main" | "test"
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Type: HeaderListener

```ts
export type HeaderListener = (header: BlockHeader) => void
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Type: ReorgListener

```ts
export type ReorgListener = (depth: number, oldTip: BlockHeader, newTip: BlockHeader) => void
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Type: DojoLoggerApi

```ts
export type DojoLoggerApi = (...data: any) => void
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Type: SyncDojoConfigType

```ts
export type SyncDojoConfigType = "<custom>" | "Cloud URL" | "Sqlite File" | "MySql Connection"
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Type: DojoSyncStatus

success: Last sync of this user from this dojo was successful.

error: Last sync protocol operation for this user to this dojo threw and error.

identified: Configured sync dojo has been identified but not sync'ed.

unknown: Sync protocol state is unknown.

```ts
export type DojoSyncStatus = "success" | "error" | "identified" | "updated" | "unknown"
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Type: DojoSyncProtocolVersion

```ts
export type DojoSyncProtocolVersion = "0.1.0"
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Type: DojoTransactionStatusApi

```ts
export type DojoTransactionStatusApi = "completed" | "failed" | "unprocessed" | "sending" | "unproven" | "unsigned" | "nosend"
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Type: DojoRecordOrder

```ts
export type DojoRecordOrder = "ascending" | "descending"
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Type: DojoTransactionLabelsSortBy

```ts
export type DojoTransactionLabelsSortBy = "label" | "whenLastUsed"
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Type: DojoProvenTxReqStatusApi

Initial status (attempts === 0):

unsent: rawTx has not yet been sent to the network for processing. Next attempt should send it.

nosend: transaction was marked 'noSend'. It is complete and signed. It may be sent by an external party. Proof should be sought as if 'unmined'. No error if it remains unknown by network.

sending: At least one attempt to send rawTx to transaction processors has occured without confirmation of acceptance.

unknown: rawTx status is unknown but is believed to have been previously sent to the network.

Attempts > 0 status, processing:

unknown: Last status update received did not recognize txid or wasn't understood.

nonfinal: rawTx has an un-expired nLockTime and is eligible for continuous updating by new transactions with additional outputs and incrementing sequence numbers.

unmined: Last attempt has txid waiting to be mined, possibly just sent without callback

callback: Waiting for proof confirmation callback from transaction processor.

unconfirmed: Potential proof has not been confirmed by chaintracks

Terminal status:

doubleSpend: Transaction spends same input as another transaction.

invalid: rawTx is structuraly invalid or was rejected by the network. Will never be re-attempted or completed.

completed: proven_txs record added, and notifications are complete.

```ts
export type DojoProvenTxReqStatusApi = "sending" | "unsent" | "nosend" | "unknown" | "nonfinal" | "unmined" | "callback" | "unconfirmed" | "completed" | "invalid" | "doubleSpend"
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Type: DojoProvidedByApi

```ts
export type DojoProvidedByApi = "you" | "dojo" | "you-and-dojo"
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
### Variables

| |
| --- |
| [DojoProvenTxReqNonTerminalStatus](#variable-dojoproventxreqnonterminalstatus) |
| [DojoProvenTxReqTerminalStatus](#variable-dojoproventxreqterminalstatus) |

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---

#### Variable: DojoProvenTxReqTerminalStatus

```ts
DojoProvenTxReqTerminalStatus: DojoProvenTxReqStatusApi[] = [
    "completed",
    "invalid",
    "doubleSpend"
]
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---
#### Variable: DojoProvenTxReqNonTerminalStatus

```ts
DojoProvenTxReqNonTerminalStatus: DojoProvenTxReqStatusApi[] = [
    "sending",
    "unsent",
    "nosend",
    "unknown",
    "nonfinal",
    "unmined",
    "callback",
    "unconfirmed"
]
```

Links: [API](#api), [Interfaces](#interfaces), [Classes](#classes), [Functions](#functions), [Types](#types), [Variables](#variables)

---

<!--#endregion ts2md-api-merged-here-->

## License

The license for the code in this repository is the Open BSV License.
