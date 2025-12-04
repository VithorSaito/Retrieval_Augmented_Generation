import { createKnowledgeUseCase } from "../../../../application/usecase/knowledgeBaseUseCase/create";
import { CreateKnowledgeController } from "./createKnowledgeController";

export const createKnowledgeController = new CreateKnowledgeController(createKnowledgeUseCase)