export interface CosineSimilarityRepository {
  compareVector(embeddingQuestion: string): Promise<unknown>
}