import { GenerateEmbaddingGateway } from "../../../../domain/gateways/generateEmbaddingGateway.js";
import { openai } from "../../../external/openai.js";

export class OpenaiGenerateEmbadding implements GenerateEmbaddingGateway {
  async execute(value: string): Promise<string> {
    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: value
    })

    const vectorString = `[${embedding.data[0].embedding.join(", ")}]`

    return vectorString

  }
}