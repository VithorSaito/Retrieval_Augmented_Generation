import { FastifyInstance } from "fastify";

import { createKnowledgeController } from "../controller/knowledgeController/create";
import { findKnowledgeController } from "../controller/knowledgeController/find";

export const knowledgeRoutes = async (server: FastifyInstance) => {

  server
    .post("/knowledge", { onRequest: [server.authenticate] }, async (request, reply) => {
      const result = await createKnowledgeController.execute(request, reply)

      return result

    })
    .get("/question", { websocket: true, onRequest: [server.authenticate] }, async (websocket, request) => {
      const result = await findKnowledgeController.execute(websocket, request)

      return result
    })

} 