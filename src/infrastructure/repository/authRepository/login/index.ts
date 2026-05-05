import { database } from "../../../external/prisma.js";
import { PrismaLoginRepository } from "./loginRepository.js";

export const loginRepository = new PrismaLoginRepository(database)