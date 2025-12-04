import { redis } from "../../../external/redis";
import { GetCache } from "../../../../domain/services/getCacheService";

export class GetCacheRedis implements GetCache {
  async execute(username: string): Promise<string | null> {
    return redis.get(username)
  }
}