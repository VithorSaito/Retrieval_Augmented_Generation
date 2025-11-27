import OpenAI from "openai";

import { openai } from "../lib/openai";

export class Agent {
  constructor(private agent: OpenAI) { }

  async generateEmbadding(value: string): Promise<String> {
    const embedding = await this.agent.embeddings.create({
      model: "text-embedding-3-small",
      input: value
    })

    return `${embedding.data[0].embedding.join(',')}`

  }

  async generateResponse(prompt: string): Promise<String> {
    const response = await this.agent.responses.create({
      model: 'gpt-5-2025-08-07',
      input: prompt
    })

    return response.output_text
  }
}

export const agent = new Agent(openai)
