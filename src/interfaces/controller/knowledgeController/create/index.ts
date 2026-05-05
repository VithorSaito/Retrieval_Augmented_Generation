import { createKnowledgeUseCase } from "../../../../application/usecase/knowledgeUseCase/create/index.js";
import { CreateKnowledgeController } from "./createKnowledgeController.js";

export const createKnowledgeController = new CreateKnowledgeController(createKnowledgeUseCase)