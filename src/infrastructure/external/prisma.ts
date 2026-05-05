import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env.js";
import { PrismaClient } from "../database/src/database/generated/prisma/client.js";

const connectionString = env.DATABASE_URL

const adapter = new PrismaPg({ connectionString })
export const database = new PrismaClient({ adapter })