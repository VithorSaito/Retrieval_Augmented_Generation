import { getCache } from "../../../../infrastructure/utils/cache/get";
import { setCache } from "../../../../infrastructure/utils/cache/set";
import { generateResponse } from "../../../../infrastructure/utils/openai/response";
import { generateEmbedding } from "../../../../infrastructure/utils/openai/embadding";
import { findKnowledgeRepository } from "../../../../infrastructure/repository/knowledgeRepository/find";

import { FindKnowledgeUseCase } from "./findKnowledgeUseCase";

export const findKnowledgeUseCase = new FindKnowledgeUseCase(
  findKnowledgeRepository,
  generateEmbedding,
  generateResponse,
  getCache,
  setCache
)