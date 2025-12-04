export interface HashPassword {
  hash(data: string | Buffer<ArrayBufferLike>, saltOrRounds: string | number): Promise<string>
}