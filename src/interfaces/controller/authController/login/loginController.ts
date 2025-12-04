import { FastifyReply, FastifyRequest } from "fastify";
import { LoginUseCase } from "../../../../application/usecase/authUseCase/login/loginUsecase";

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) { }

  async execute(request: FastifyRequest, reply: FastifyReply) {

    const { email, password } = request.body as { email: string, password: string };

    const username = await this.loginUseCase.execute(email, password);

    const accesstoken = await reply.jwtSign({
      username
    })

    return reply.status(200).send({ accesstoken });
  }
}