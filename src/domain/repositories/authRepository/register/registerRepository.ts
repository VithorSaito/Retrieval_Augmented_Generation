import { RegisterDTO } from "../../../../interfaces/dto/registerDTO.js";
import { User } from "../../../entities/userEntity.js";

export interface RegisterRepository {
  findByEmail(email: string): Promise<User | null>,
  createLogin(data: Omit<RegisterDTO, "confirmPassword">, refreshToken: string): Promise<any>
}