export interface GetCache {
  execute(username: string): Promise<string | null>
}