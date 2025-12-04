import { database } from "../../../external/prisma";
import { PrismaLoginRepository } from "./loginRepository";

export const loginRepository = new PrismaLoginRepository(database)