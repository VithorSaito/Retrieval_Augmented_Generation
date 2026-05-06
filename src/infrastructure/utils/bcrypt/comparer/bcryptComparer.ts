import { compare } from "bcrypt";
import { HashComparerGateway } from "../../../../domain/gateways/hashComparerGateway.js";

export class BcryptHashComparer implements HashComparerGateway {
  async compare(data: string | Buffer<ArrayBufferLike>, encrypted: string): Promise<boolean> {
    return compare(data, encrypted)
  }
}