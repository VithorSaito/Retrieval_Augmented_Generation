export interface HashComparer {
  compare(data: string | Buffer<ArrayBufferLike>, encrypted: string): Promise<boolean>
}