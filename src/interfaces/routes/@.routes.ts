import { FastifyInstance } from "fastify";

import { authRoutes } from "./auth.routes";
import { knowledgeRoutes } from "./knowledge.routes";

const routes = async (server: FastifyInstance) => {

  server.register(knowledgeRoutes)
  server.register(authRoutes)
}

export default routes