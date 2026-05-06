export interface GenerateResponseGateway {
  execute(prompt: string): Promise<string>
}