import { GenerateEmbadding } from "../../../../domain/services/generateEmbaddingService";
import { PrismaSaveKnowledgeRepository } from "../../../../infrastructure/repository/knowledgeRepository/create/saveKnowledgeRepository";
import { KnowLedgeDTO } from "../../../../interfaces/dto/knowledgeDTO";
import { InternalError } from "../../../../shared/errors/InternalError";

export class CreateKnowledgeUseCase {
  constructor(
    private readonly saveKnowledge: PrismaSaveKnowledgeRepository,
    private readonly generateEmbedding: GenerateEmbadding
  ) { }

  async execute(data: KnowLedgeDTO) {

    const embeddingResult = await this.generateEmbedding.execute(`${data}`)

    try {

      const saveInDatabase = this.saveKnowledge.saveKnowledge(data, embeddingResult)

      return saveInDatabase

    } catch (error) {
      throw new InternalError("Erro ao salvar conhecimento na base de dados!");
    }

  }
}