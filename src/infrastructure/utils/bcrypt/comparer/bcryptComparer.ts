import { compare } from "bcrypt";
import { HashComparer } from "../../../../domain/services/hashComparerService";


export class BcryptHashComparer implements HashComparer {
  async compare(data: string | Buffer<ArrayBufferLike>, encrypted: string): Promise<boolean> {
    return compare(data, encrypted)
  }
}