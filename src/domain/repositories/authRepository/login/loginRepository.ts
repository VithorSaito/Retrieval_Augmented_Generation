import { User } from "../../../entities/userEntity.js";

export interface LoginRepository {
  findUser(email: string): Promise<User | null>
}