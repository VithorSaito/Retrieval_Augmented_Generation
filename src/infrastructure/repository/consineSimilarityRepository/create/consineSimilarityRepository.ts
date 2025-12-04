import { KnowLedgeDTO } from "../../../../interfaces/dto/knowledgeDTO";
import { PrismaClient } from "../../../database/src/database/generated/prisma/client";

export class CosineSimilarityRepository {
  constructor(private database: PrismaClient) { }

  async execute(embeddingQuestion: string) {

    const result: KnowLedgeDTO[] = await this.database.$queryRaw`
      SELECT id,
            title,
            problem,
            solution,
            1 - (embedding_context <=> ${embeddingQuestion}) AS similarity
      FROM knowledge
      WHERE solution != ''
      ORDER BY similarity DESC
      LIMIT 7;
    `

    return result
  }
}