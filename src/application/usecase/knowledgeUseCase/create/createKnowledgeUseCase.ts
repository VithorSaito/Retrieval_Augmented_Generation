import { GenerateEmbadding } from "../../../../domain/services/generateEmbaddingService.js";
import { PrismaSaveKnowledgeRepository } from "../../../../infrastructure/repository/knowledgeRepository/create/saveKnowledgeRepository.js";
import { KnowLedgeDTO } from "../../../../interfaces/dto/knowledgeDTO.js";
import { InternalError } from "../../../../shared/errors/InternalError.js";

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