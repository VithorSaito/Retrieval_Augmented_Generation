import { loginController } from "../controller/authController/login/index.js";
import { registerController } from "../controller/authController/register/index.js";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { authSchemas } from "../schemas/auth.schemas.js";


export const authRoutes: FastifyPluginAsyncZod = async app => {

  app
    .post("/register", { schema: authSchemas.register }, async (request, reply) => {

      const result = await registerController.execute(request, reply)

      return result

    })
    .post("/login", { schema: authSchemas.login }, async (request, reply) => {

      const result = await loginController.execute(request, reply)

      return result

    })


} 