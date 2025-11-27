import OpenAI from "openai";

export class Agent {
  constructor(private agent: OpenAI) { }

  async generateEmbadding(value: string): Promise<number[]> {
    const embedding = await this.agent.embeddings.create({
      model: "text-embedding-3-small",
      input: value
    })

    return embedding.data[0].embedding

  }

  async generateResponse(prompt: string): Promise<string> {
    const response = await this.agent.responses.create({
      model: 'gpt-5-2025-08-07',
      input: prompt
    })

    return response.output_text
  }
}

