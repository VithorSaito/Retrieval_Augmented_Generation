import { database } from "../../../external/prisma";
import { PrismaSaveKnowledgeRepository } from "./saveKnowledgeRepository";

export const saveKnowledgeRepository = new PrismaSaveKnowledgeRepository(database)