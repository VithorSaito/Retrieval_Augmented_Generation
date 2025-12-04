import { User } from "../../../../domain/entities/userEntity"
import { RegisterRepository } from "../../../../domain/repositories/authRepository/register/registerRepository"
import { RegisterDTO } from "../../../../interfaces/dto/registerDTO"
import { PrismaClient } from "../../../database/src/database/generated/prisma/client"

export class PrismaRegisterRepository implements RegisterRepository {
  constructor(private readonly database: PrismaClient) { }

  async findByEmail(email: string): Promise<User | null> {

    const result = await this.database.users.findUnique({
      where: {
        email: email
      }
    })
    return result
  }

  async createLogin(data: Omit<RegisterDTO, "confirmPassword">, refreshToken: string): Promise<any> {

    const result = await this.database.users.create({
      data: {
        email: data.email,
        username: data.username,
        password: data.password,
        refreshToken
      }
    })

    return result

  }
}