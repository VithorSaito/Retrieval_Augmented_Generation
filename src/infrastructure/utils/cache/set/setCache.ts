import { redis } from "../../../external/redis";
import { SetCache } from "../../../../domain/services/setCacheService";

export class SetCacheRedis implements SetCache {
  async execute(username: string, prompt: string, response: string): Promise<string | null> {
    return redis.set(username, `Prompt: ${prompt}, Resposta: ${response}`, { expiration: { type: "EX", value: 60 * 30 } })
  }
}