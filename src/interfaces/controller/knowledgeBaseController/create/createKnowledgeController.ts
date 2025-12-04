import z from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { CreateKnowledgeUseCase } from "../../../../application/usecase/knowledgeBaseUseCase/create/createKnowledgeUseCase";

export class CreateKnowledgeController {
  constructor(private createKnowledgeUseCase: CreateKnowledgeUseCase) { }

  async execute(request: FastifyRequest, reply: FastifyReply) {

    const bodySchema = z.object({
      title: z.string(),
      category: z.string(),
      problem: z.string(),
      solution: z.string(),
      environment: z.string(),
    }).parse(request.body)

    const result = await this.createKnowledgeUseCase.execute(bodySchema)

    return reply.send(result).status(201)

  }
}