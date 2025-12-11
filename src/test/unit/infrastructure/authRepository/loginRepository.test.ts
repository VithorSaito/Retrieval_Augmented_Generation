import { test, describe, it, vi, expect } from "vitest";
import { PrismaLoginRepository } from "../../../../infrastructure/repository/authRepository/login/loginRepository";
import { PrismaClient } from "../../../../infrastructure/database/src/database/generated/prisma/client";

test('Repositorys Test')

describe('Login Repository', async () => {

  it('Should be return user when he exist', async () => {

    let loginRepository: PrismaLoginRepository

    const prismaMock = {
      users: {
        findFirst: vi.fn().mockResolvedValue({
          id: 1,
          username: "Jhon Doe",
          email: "test@exemple.com",
          password: "9j23-98dmkda",
          created_at: '28/10/2003',
          updated_at: '28/10/2004',
          refreshToken: "23d239dj2askdsha"
        })
      }
    } as unknown as PrismaClient

    loginRepository = new PrismaLoginRepository(prismaMock)

    const user = await loginRepository.findUser('test@exemple.com')

    expect(prismaMock.users.findFirst).toHaveBeenCalledWith({
      where: {
        email: 'test@exemple.com'
      }
    })

    expect(user).toEqual({
      id: 1,
      username: "Jhon Doe",
      email: "test@exemple.com",
      password: "9j23-98dmkda",
      created_at: '28/10/2003',
      updated_at: '28/10/2004',
      refreshToken: "23d239dj2askdsha"
    })

  })
  it("Should be return null when don't exist user", async () => {
    let loginRepository: PrismaLoginRepository

    const prismaMock = {
      users: {
        findFirst: vi.fn().mockResolvedValue(null)
      }
    } as unknown as PrismaClient

    loginRepository = new PrismaLoginRepository(prismaMock)
    const user = await loginRepository.findUser('notfound@exemple.com')

    expect(user).toEqual(null)

  })
})