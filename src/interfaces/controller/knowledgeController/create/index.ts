import { createKnowledgeUseCase } from "../../../../application/usecase/knowledgeUseCase/create";
import { CreateKnowledgeController } from "./createKnowledgeController";

export const createKnowledgeController = new CreateKnowledgeController(createKnowledgeUseCase)