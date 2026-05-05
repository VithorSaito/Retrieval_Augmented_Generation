import { KnowLedgeDTO } from "../../../../interfaces/dto/knowledgeDTO.js";

export interface SaveKnowledgeRepository {
  saveKnowledge(data: KnowLedgeDTO, embeddingResult: string): Promise<unknown>
}