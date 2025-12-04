export interface GenerateResponse {
  execute(prompt: string): Promise<string>
}