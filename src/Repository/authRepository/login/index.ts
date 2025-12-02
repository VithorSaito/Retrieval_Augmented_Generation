import { database } from "../../../lib/prisma";
import { LoginRepository } from "./login.repository";

export const loginRepository = new LoginRepository(database)