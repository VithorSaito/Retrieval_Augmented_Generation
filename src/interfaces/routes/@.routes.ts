import { FastifyInstance } from "fastify";

import { authRoutes } from "./auth.routes.js";
import { knowledgeRoutes } from "./knowledge.routes.js";

const routes = async (server: FastifyInstance) => {

  server.register(knowledgeRoutes)
  server.register(authRoutes)
}

export default routes