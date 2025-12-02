import { FastifyReply, FastifyRequest } from "fastify";
import { LoginUseCase } from "../../../usecases/authUseCase/login/login.usecase";

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) { }

  async execute(request: FastifyRequest, reply: FastifyReply) {

    const { email, password } = request.body as { email: string, password: string };

    const result = await this.loginUseCase.execute(email, password);

    const accesstoken = await reply.jwtSign({
      username: result
    })

    return reply.send(accesstoken).status(200);
  }
}