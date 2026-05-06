export interface HashComparerGateway {
  compare(data: string | Buffer<ArrayBufferLike>, encrypted: string): Promise<boolean>
}