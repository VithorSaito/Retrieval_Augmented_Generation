import { hash } from "bcrypt";
import { HashPasswordGateway } from "../../../../domain/gateways/hashPasswordGateway.js";

export class BcryptHashPassword implements HashPasswordGateway {
  async hash(data: string | Buffer<ArrayBufferLike>, saltOrRounds: string | number): Promise<string> {
    return hash(data, saltOrRounds)
  }
}