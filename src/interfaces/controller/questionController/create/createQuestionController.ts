import { WebSocket } from "ws";
import { FastifyRequest } from "fastify";
import { CreateQuestionUseCase } from "../../../../application/usecase/questionUseCase/create/createQuestionUseCase";

export class CreateQuestionController {
  constructor(private createQuestionUseCase: CreateQuestionUseCase) { }

  async execute(socket: WebSocket, request: FastifyRequest) {

    try {

      socket.on("message", async (message) => {

        const text = message.toString()
        const { username } = request.user as { username: string }

        const result = await this.createQuestionUseCase.execute(text, username)

        socket.send(result)

      })
    } catch (err) {
      socket.send(JSON.stringify({
        erro: err || "erro interno"
      }))
    }
  }
}