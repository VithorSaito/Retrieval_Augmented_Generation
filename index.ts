import "dotenv/config"

import fastify from "fastify"
import ws from "@fastify/websocket"

import auth from "./src/plugin/auth"
import { routes } from "./src/routes/@.routes"

const Fastify = fastify()

auth(Fastify)

Fastify.register(ws)

Fastify.register(routes)

Fastify.listen({ port: 3333 }, (add, port) => {
  console.log(port)
})