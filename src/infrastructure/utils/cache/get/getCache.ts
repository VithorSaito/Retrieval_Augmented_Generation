import { redis } from "../../../external/redis.js";
import { GetCache } from "../../../../domain/services/getCacheService.js";

export class GetCacheRedis implements GetCache {
  async execute(username: string): Promise<string | null> {
    return redis.get(username)
  }
}