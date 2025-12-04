import { database } from "../../../external/prisma";
import { CosineSimilarityRepository } from "./consineSimilarityRepository";

export const cosineSimilarityRepository = new CosineSimilarityRepository(database)