import { FastifyInstance } from "fastify"

import ws from "@fastify/websocket"
import swagger from "@fastify/swagger"
import swaggerUi from "@fastify/swagger-ui"
import { jsonSchemaTransform } from "fastify-type-provider-zod"
import { validatorCompiler, serializerCompiler } from "fastify-type-provider-zod"
import routes from "../interfaces/routes/@.routes.js"

export function registerPlugins(app: FastifyInstance) {

  app.setValidatorCompiler(validatorCompiler)
  app.setSerializerCompiler(serializerCompiler)

  app.register(swagger, {
    openapi: {
      info: {
        title: "RAG API",
        description: "API for retrivel augmented generation",
        version: "1.0.0",
      },
      servers: []
    },
    transform: jsonSchemaTransform
  })

  app.register(swaggerUi, {
    routePrefix: "/docs",
  })

  app.register(ws)
  app.register(routes)

}