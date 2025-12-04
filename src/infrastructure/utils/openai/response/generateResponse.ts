import { env } from "../../../external/env";
import { openai } from "../../../external/openai";
import { GenerateResponse } from "../../../../domain/services/generateResponseService";

export class OpenaiGenerateResponse implements GenerateResponse {
  async execute(prompt: string): Promise<string> {
    const response = await openai.responses.create({
      model: env.GPT_MODEL,
      input: prompt
    })

    return response.output_text
  }
}