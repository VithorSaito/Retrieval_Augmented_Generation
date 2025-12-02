import { FastifyInstance } from "fastify";
import { registerController } from "../controller/authController/register";
import { loginController } from "../controller/authController/login";


export const authRoutes = async (server: FastifyInstance) => {

  server
    .post("/register", async (request, reply) => {

      const result = await registerController.execute(request, reply)

      return result

    })
    .post("/login", async (request, reply) => {

      const result = await loginController.execute(request, reply)

      return result

    })


} 