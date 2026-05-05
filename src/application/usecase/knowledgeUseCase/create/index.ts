import { CreateKnowledgeUseCase } from "./createKnowledgeUseCase.js";
import { generateEmbedding } from "../../../../infrastructure/utils/openai/embadding/index.js";
import { saveKnowledgeRepository } from "../../../../infrastructure/repository/knowledgeRepository/create/index.js";

export const createKnowledgeUseCase = new CreateKnowledgeUseCase(saveKnowledgeRepository, generateEmbedding)