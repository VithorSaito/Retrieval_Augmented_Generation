import { database } from "../../../external/prisma";
import { PrismaRegisterRepository } from "./registerRepository";

export const registerRepository = new PrismaRegisterRepository(database)