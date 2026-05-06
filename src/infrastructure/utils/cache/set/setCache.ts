import { redis } from "../../../external/redis.js";
import { SetCacheGateway } from "../../../../domain/gateways/setCacheGateway.js";

export class SetCacheRedis implements SetCacheGateway {
  async execute(username: string, prompt: string, response: string): Promise<string | null> {
    return redis.set(username, `Prompt: ${prompt}, Resposta: ${response}`, { expiration: { type: "EX", value: 60 * 30 } })
  }
}