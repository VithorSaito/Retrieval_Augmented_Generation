import { describe, expect, it, test, vi } from "vitest";
import { PrismaClient } from "../../../../infrastructure/database/src/database/generated/prisma/client.js";
import { PrismaSaveKnowledgeRepository } from "../../../../infrastructure/repository/knowledgeRepository/create/saveKnowledgeRepository.js";

test("Repositorys Test")

describe("Knowledge Repository", async () => {

  it("Should be save a new knowledge", async () => {

    const prismaMock = {
      $queryRaw: vi.fn().mockResolvedValue({
        id: 1,
        title: "new knowledge",
        category: "test",
        problem: "test problem",
        solution: "test solution",
        environment: "test environment",
        embedding_context: "Refreshtoken"
      })
    } as unknown as PrismaClient

    const repository = new PrismaSaveKnowledgeRepository(prismaMock)

    const result = await repository.saveKnowledge(
      {
        title: "new knowledge",
        category: "test",
        problem: "test problem",
        solution: "test solution",
        environment: "test environment"
      },
      "Refreshtoken"
    )

    expect(result).toBeDefined()
    expect(prismaMock.$queryRaw).toHaveBeenCalled()
  })
})