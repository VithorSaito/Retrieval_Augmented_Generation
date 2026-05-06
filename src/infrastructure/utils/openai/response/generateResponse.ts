import { GenerateResponseGateway } from "../../../../domain/gateways/generateResponseGateway.js";
import { env } from "../../../external/env.js";
import { openai } from "../../../external/openai.js";

export class OpenaiGenerateResponse implements GenerateResponseGateway {
  async execute(prompt: string): Promise<string> {
    const response = await openai.responses.create({
      model: env.GPT_MODEL,
      input: prompt
    })

    return response.output_text
  }
}