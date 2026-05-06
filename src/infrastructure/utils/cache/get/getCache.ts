import { GetCacheGateway } from "../../../../domain/gateways/getCacheServiceGateway.js";
import { redis } from "../../../external/redis.js";

export class GetCacheRedis implements GetCacheGateway {
  async execute(username: string): Promise<string | null> {
    return redis.get(username)
  }
}