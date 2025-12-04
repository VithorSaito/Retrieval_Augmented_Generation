export interface SetCache {
  execute(username: string, prompt: string, response: string): Promise<string | null>
}