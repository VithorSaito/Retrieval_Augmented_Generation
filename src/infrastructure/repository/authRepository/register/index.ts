import { database } from "../../../external/prisma.js";
import { PrismaRegisterRepository } from "./registerRepository.js";

export const registerRepository = new PrismaRegisterRepository(database)