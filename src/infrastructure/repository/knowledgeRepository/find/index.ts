import { database } from "../../../external/prisma.js";
import { PrismaFindKnowledgeRepository } from "./findKnowledgeRepository.js";

export const findKnowledgeRepository = new PrismaFindKnowledgeRepository(database)