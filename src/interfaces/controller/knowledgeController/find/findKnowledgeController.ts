import { WebSocket } from "ws";
import { FastifyRequest } from "fastify";
import { FindKnowledgeUseCase } from "../../../../application/usecase/knowledgeUseCase/find/findKnowledgeUseCase";

export class FindKnowledgeController {
  constructor(private findKnowledgeUseCase: FindKnowledgeUseCase) { }

  async execute(socket: WebSocket, request: FastifyRequest) {

    try {

      socket.on("message", async (message) => {

        const text = message.toString()
        const { username } = request.user as { username: string }

        const result = await this.findKnowledgeUseCase.execute(text, username)

        socket.send(result)

      })
    } catch (err) {
      socket.send(JSON.stringify({
        erro: err || "erro interno"
      }))
    }
  }
}