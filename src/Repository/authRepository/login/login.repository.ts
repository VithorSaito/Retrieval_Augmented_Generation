import { PrismaClient } from "../../../database/src/database/generated/prisma/client";

export class LoginRepository {
  constructor(private database: PrismaClient) { }

  async findUser(email: string,) {

    const user = await this.database.users.findFirst({
      where: {
        email,
      }
    });

    return user

  }

}