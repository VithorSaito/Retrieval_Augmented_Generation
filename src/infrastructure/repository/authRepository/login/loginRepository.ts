import { PrismaClient } from "../../../database/src/database/generated/prisma/client";

import { LoginRepository } from "../../../../domain/repositories/authRepository/login/loginRepository";
import { User } from "../../../../domain/entities/userEntity";

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