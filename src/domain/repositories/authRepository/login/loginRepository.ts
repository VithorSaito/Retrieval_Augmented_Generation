import { User } from "../../../entities/userEntity";

export interface LoginRepository {
  findUser(email: string): Promise<User | null>
}