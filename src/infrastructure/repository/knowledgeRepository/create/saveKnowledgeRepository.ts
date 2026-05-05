import { SaveKnowledgeRepository } from "../../../../domain/repositories/knowledgeRepository/create/saveKnowledgeRepository.js";
import { KnowLedgeDTO } from "../../../../interfaces/dto/knowledgeDTO.js";
import { PrismaClient } from "../../../database/src/database/generated/prisma/client.js";

export class PrismaSaveKnowledgeRepository implements SaveKnowledgeRepository {
  constructor(private database: PrismaClient) { }

  async saveKnowledge(data: KnowLedgeDTO, embeddingResult: string) {

    const result = await this.database.$queryRaw`
      INSERT INTO knowledge (
        title,
        category,
        problem,
        solution,
        environment,
        embedding_context
      )
      VALUES (
        ${data.title},
        ${data.category},
        ${data.problem},
        ${data.solution},
        ${data.environment},
        ${embeddingResult}::vector
      )
    `
    return result

  }
}