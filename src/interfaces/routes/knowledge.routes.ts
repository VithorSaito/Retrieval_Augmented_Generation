import { FastifyInstance } from "fastify";

import { createKnowledgeController } from "../controller/knowledgeController/create/index.js";
import { findKnowledgeController } from "../controller/knowledgeController/find/index.js";

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