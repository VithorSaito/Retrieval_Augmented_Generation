import { findKnowledgeUseCase } from "../../../../application/usecase/knowledgeUseCase/find/index.js";
import { FindKnowledgeController } from "./findKnowledgeController.js";

export const findKnowledgeController = new FindKnowledgeController(findKnowledgeUseCase)