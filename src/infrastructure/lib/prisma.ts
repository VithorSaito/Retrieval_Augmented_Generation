import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../database/src/database/generated/prisma/client";
import { env } from "../external/env";

const connectionString = env.DATABASE_URL

const adapter = new PrismaPg({ connectionString })
export const database = new PrismaClient({ adapter })