import { redis } from "../infrastructure/external/redis.js";

export async function makeDependencies() {

  await redis.connect()

  return
}