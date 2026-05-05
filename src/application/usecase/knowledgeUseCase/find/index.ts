import { findKnowledgeRepository } from "../../../../infrastructure/repository/knowledgeRepository/find/index.js";
import { getCache } from "../../../../infrastructure/utils/cache/get/index.js";
import { setCache } from "../../../../infrastructure/utils/cache/set/index.js";
import { generateEmbedding } from "../../../../infrastructure/utils/openai/embadding/index.js";
import { generateResponse } from "../../../../infrastructure/utils/openai/response/index.js";
import { FindKnowledgeUseCase } from "./findKnowledgeUseCase.js";

export const findKnowledgeUseCase = new FindKnowledgeUseCase(
  findKnowledgeRepository,
  generateEmbedding,
  generateResponse,
  getCache,
  setCache
)