import { database } from "../../../external/prisma.js";
import { PrismaSaveKnowledgeRepository } from "./saveKnowledgeRepository.js";

export const saveKnowledgeRepository = new PrismaSaveKnowledgeRepository(database)