import { KnowLedgeDTO } from "../../../../interfaces/dto/knowledgeDTO";

export interface SaveKnowledgeRepository {
  saveKnowledge(data: KnowLedgeDTO, embeddingResult: string): Promise<unknown>
}