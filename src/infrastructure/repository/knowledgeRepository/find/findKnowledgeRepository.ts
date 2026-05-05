import { FindKnowledgeRepository } from "../../../../domain/repositories/knowledgeRepository/find/findKnowledgeRepository.js";
import { KnowLedgeDTO } from "../../../../interfaces/dto/knowledgeDTO.js";
import { PrismaClient } from "../../../database/src/database/generated/prisma/client.js";

export class PrismaFindKnowledgeRepository implements FindKnowledgeRepository {
  constructor(private database: PrismaClient) { }

  async compareVector(embeddingQuestion: string): Promise<KnowLedgeDTO[]> {

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