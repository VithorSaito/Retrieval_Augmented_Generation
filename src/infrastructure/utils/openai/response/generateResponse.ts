import { env } from "../../../external/env.js";
import { openai } from "../../../external/openai.js";
import { GenerateResponse } from "../../../../domain/services/generateResponseService.js";

export class OpenaiGenerateResponse implements GenerateResponse {
  async execute(prompt: string): Promise<string> {
    const response = await openai.responses.create({
      model: env.GPT_MODEL,
      input: prompt
    })

    return response.output_text
  }
}