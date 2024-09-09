/* eslint-disable @typescript-eslint/no-unused-vars */
import { Chain } from './Api/CwiBaseApi'
import { convertBufferToUint32, convertUint32ToBuffer, doubleSha256HashLE, swapByteOrder } from './utils'

import { BaseBlockHeader, BlockHeaderHex, toBlockHeader } from './Api/BlockHeaderApi'

/**
 * Computes double sha256 hash of bitcoin block header
 * bytes are reversed to bigendian order
 *
 * If header is a Buffer, it is required to 80 bytes long
 * and in standard block header serialized encoding.
 *
 * @returns doule sha256 hash of header bytes reversed
 * @publicbody
 */
export function blockHash (header: BaseBlockHeader | Buffer): Buffer {
  const data = !Buffer.isBuffer(header) ? serializeBlockHeader(header) : header
  if (data.length !== 80) throw new Error('Block header must be 80 bytes long.')
  return doubleSha256HashLE(data).reverse()
}

/**
 * Serializes a block header as an 80 byte Buffer.
 * The exact serialized format is defined in the Bitcoin White Paper
 * such that computing a double sha256 hash of the buffer computes
 * the block hash for the header.
 * @returns 80 byte Buffer
 * @publicbody
 */
export function serializeBlockHeader (header: BaseBlockHeader, buffer?: Buffer, offset?: number): Buffer {
  if (buffer != null) {
    offset ||= 0
    buffer.writeUInt32LE(header.version, offset)
    swapByteOrder(header.previousHash).copy(buffer, offset + 4, 0, 32)
    swapByteOrder(header.merkleRoot).copy(buffer, offset + 36, 0, 32)
    buffer.writeUInt32LE(header.time, offset + 68)
    buffer.writeUInt32LE(header.bits, offset + 72)
    buffer.writeUInt32LE(header.nonce, offset + 76)
    return buffer.subarray(offset, offset + 80)
  } else {
    const data = Buffer.concat([
      convertUint32ToBuffer(header.version),
      swapByteOrder(header.previousHash),
      swapByteOrder(header.merkleRoot),
      convertUint32ToBuffer(header.time),
      convertUint32ToBuffer(header.bits),
      convertUint32ToBuffer(header.nonce)
    ])
    return data
  }
}

/**
 * Deserialize a block header from an 80 byte buffer
 * @publicbody
 */
export function deserializeBlockHeader (buffer: Buffer, offset = 0): BaseBlockHeader {
  const header: BaseBlockHeader = {
    version: convertBufferToUint32(buffer.subarray(0 + offset, 4 + offset)),
    previousHash: swapByteOrder(buffer.subarray(4 + offset, 36 + offset)),
    merkleRoot: swapByteOrder(buffer.subarray(36 + offset, 68 + offset)),
    time: convertBufferToUint32(buffer.subarray(68 + offset, 72 + offset)),
    bits: convertBufferToUint32(buffer.subarray(72 + offset, 76 + offset)),
    nonce: convertBufferToUint32(buffer.subarray(76 + offset, 80 + offset))
  }

  return header
}

/**
 * Returns the genesis block for the specified chain.
 * @publicbody
 */
export function genesisHeaderHex (chain: Chain): BlockHeaderHex {
  return chain === 'main'
    ? {
        version: 1,
        previousHash: '0000000000000000000000000000000000000000000000000000000000000000',
        merkleRoot: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
        time: 1231006505,
        bits: 486604799,
        nonce: 2083236893,
        height: 0,
        hash: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'
      }
    : {
        version: 1,
        previousHash: '0000000000000000000000000000000000000000000000000000000000000000',
        merkleRoot: '4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b',
        time: 1296688602,
        bits: 486604799,
        nonce: 414098458,
        height: 0,
        hash: '000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943'
      }
}

/**
 * Returns the genesis block for the specified chain.
 * @publicbody
 */
export function genesisBuffer (chain: Chain): Buffer { return serializeBlockHeader(toBlockHeader(genesisHeaderHex(chain))) }
