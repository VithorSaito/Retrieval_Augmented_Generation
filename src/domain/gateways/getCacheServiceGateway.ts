export interface GetCacheGateway {
  execute(username: string): Promise<string | null>
}