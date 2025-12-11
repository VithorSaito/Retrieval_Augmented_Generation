import { KnowLedgeDTO } from "../../../../interfaces/dto/knowledgeDTO"

import { GetCache } from "../../../../domain/services/getCacheService"
import { SetCache } from "../../../../domain/services/setCacheService"
import { GenerateResponse } from "../../../../domain/services/generateResponseService"
import { GenerateEmbadding } from "../../../../domain/services/generateEmbaddingService"

import { Prompts } from "../../../../shared/prompts"
import { InternalError } from "../../../../shared/errors/InternalError"
import { PrismaFindKnowledgeRepository } from "../../../../infrastructure/repository/knowledgeRepository/find/findKnowledgeRepository"


export class FindKnowledgeUseCase {
  constructor(
    private readonly findKnowledge: PrismaFindKnowledgeRepository,
    private readonly generateEmbadding: GenerateEmbadding,
    private readonly generateResponse: GenerateResponse,
    private readonly getCache: GetCache,
    private readonly setCache: SetCache
  ) { }

  async execute(message: string, username: string) {

    try {

      const history = await this.getCache.execute(username)

      const embeddingQuestion = await this.generateEmbadding.execute(message)

      const similarResults = await this.findKnowledge.compareVector(embeddingQuestion)

      var formated: string[] = []

      similarResults.map((val: KnowLedgeDTO) => {

        if (val.problem == '') {

          formated.push(`
          Problema: ${val.title}
          Solução: ${val.solution}
          `)

        } else {

          formated.push(`
        titulo: ${val.title}
        Problema: ${val.problem}
        Solução: ${val.solution}
        `)
        }

      })

      const prompt = history
        ? Prompts.history(history, message)
        : Prompts.rag(formated, message)

      const response = await this.generateResponse.execute(prompt)

      await this.setCache.execute(username, prompt, response)

      return response
    }
    catch (err) {
      throw new InternalError("Erro ao gerar resposta!");
    }

  }
}