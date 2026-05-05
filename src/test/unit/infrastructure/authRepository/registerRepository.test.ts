import { describe, expect, it, test, vi } from "vitest";
import { PrismaRegisterRepository } from "../../../../infrastructure/repository/authRepository/register/registerRepository.js";
import { PrismaClient } from "../../../../infrastructure/database/src/database/generated/prisma/client.js";

test('Repositorys Test')

describe('Register Repository', async () => {

  it("Should be register a new user", async () => {

    const data = {
      id: 1,
      email: "newUser@exemple.com",
      username: "newUser",
      password: "testPassword",
      created_at: '12-12-2025',
      updated_at: '12-12-2025',
      refreshToken: "Refreshtoken"
    }

    const prismaMock = {
      users: {
        create: vi.fn().mockResolvedValue(data)
      }
    } as unknown as PrismaClient

    const registerRepository = new PrismaRegisterRepository(prismaMock)

    const createUser = await registerRepository.createLogin({
      email: "newUser@exemple.com",
      password: "testPassword",
      username: "newUser"
    },
      "Refreshtoken")

    expect(createUser).toEqual(data)

  })

  it("Should be find email", async () => {

    const data = {
      id: 1,
      email: "newUser@exemple.com",
      username: "newUser",
      password: "testPassword",
      created_at: '12-12-2025',
      updated_at: '12-12-2025',
      refreshToken: "Refreshtoken"
    }

    const prismaMock = {
      users: {
        findUnique: vi.fn().mockResolvedValue(data)
      }
    } as unknown as PrismaClient

    const registerRepository = new PrismaRegisterRepository(prismaMock)

    const findUserByEmail = await registerRepository.findByEmail('newUser@exemple.com')

    expect(prismaMock.users.findUnique).toHaveBeenCalledWith({
      where: {
        email: 'newUser@exemple.com'
      }
    })

    expect(findUserByEmail).toEqual(data)

  })

})
