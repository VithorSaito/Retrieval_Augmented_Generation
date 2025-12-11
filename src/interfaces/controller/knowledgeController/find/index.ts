import { findKnowledgeUseCase } from "../../../../application/usecase/knowledgeUseCase/find";
import { FindKnowledgeController } from "./findKnowledgeController";

export const findKnowledgeController = new FindKnowledgeController(findKnowledgeUseCase)