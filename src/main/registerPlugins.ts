import { FastifyInstance } from "fastify"

import ws from "@fastify/websocket"
import routes from "../interfaces/routes/@.routes.js"

export function registerPlugins(app: FastifyInstance) {

  app.register(ws)
  app.register(routes)

}