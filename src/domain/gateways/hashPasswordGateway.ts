export interface HashPasswordGateway {
  hash(data: string | Buffer<ArrayBufferLike>, saltOrRounds: string | number): Promise<string>
}