import { database } from "../../../external/prisma";
import { PrismaFindKnowledgeRepository } from "./findKnowledgeRepository";

export const findKnowledgeRepository = new PrismaFindKnowledgeRepository(database)