import { FastifyInstance } from "fastify"
import auth from "../infrastructure/plugin/auth.js"
import { errorHandler } from "../shared/errors/ErrorHandler.js"

export function registerRoutes(app: FastifyInstance) {

  auth(app)
  errorHandler(app)

}