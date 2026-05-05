import { hash } from "bcrypt";
import { HashPassword } from "../../../../domain/services/hashPasswordService.js";

export class BcryptHashPassword implements HashPassword {
  async hash(data: string | Buffer<ArrayBufferLike>, saltOrRounds: string | number): Promise<string> {
    return hash(data, saltOrRounds)
  }
}