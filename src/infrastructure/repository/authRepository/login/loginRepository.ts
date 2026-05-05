import { PrismaClient } from "../../../database/src/database/generated/prisma/client.js";

import { LoginRepository } from "../../../../domain/repositories/authRepository/login/loginRepository.js";
import { User } from "../../../../domain/entities/userEntity.js";

export class PrismaLoginRepository implements LoginRepository {
  constructor(private readonly database: PrismaClient) { }

  async findUser(email: string): Promise<User | null> {

    const user = await this.database.users.findFirst({
      where: {
        email,
      }
    });

    return user

  }

}