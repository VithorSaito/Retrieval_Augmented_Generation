import { RegisterDTO } from "../../../../interfaces/dto/registerDTO";
import { User } from "../../../entities/userEntity";

export interface RegisterRepository {
  findByEmail(email: string): Promise<User | null>,
  createLogin(data: Omit<RegisterDTO, "confirmPassword">, refreshToken: string): Promise<any>
}