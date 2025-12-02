import { env } from "../env"
import jwt from "@fastify/jwt"
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"


const auth = async (fastify: FastifyInstance) => {
  fastify.register(jwt, {
    secret: env.JWT_SECRET
  })

  fastify.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify()
      } catch (err) {
        reply.send(err)
      }
    })
}
export default auth