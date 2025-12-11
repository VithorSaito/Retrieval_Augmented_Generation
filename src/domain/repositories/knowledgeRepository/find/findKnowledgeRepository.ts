export interface FindKnowledgeRepository {
  compareVector(embeddingQuestion: string): Promise<unknown>
}