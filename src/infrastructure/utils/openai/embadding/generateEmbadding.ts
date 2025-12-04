import { openai } from "../../../external/openai";
import { GenerateEmbadding } from "../../../../domain/services/generateEmbaddingService";

export class OpenaiGenerateEmbadding implements GenerateEmbadding {
  async execute(value: string): Promise<string> {
    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: value
    })

    const vectorString = `[${embedding.data[0].embedding.join(", ")}]`

    return vectorString

  }
}