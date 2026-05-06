export interface SetCacheGateway {
  execute(username: string, prompt: string, response: string): Promise<string | null>
}