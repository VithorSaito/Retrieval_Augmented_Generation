import { database } from "../../../external/prisma";
import { SaveKnowledgeRepository } from "./saveKnowledgeRepository";

export const saveKnowledgeRepository = new SaveKnowledgeRepository(database)