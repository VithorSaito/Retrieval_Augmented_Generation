import z from "zod";

export const authSchemas = {
  login: {
    tags: ["Auth"],
    description: "Endpoint para realizar o login de um usuário.",
    body: z.object({
      email: z.string().email(),
      password: z.string()
    })
  },
  register: {
    tags: ["Auth"],
    description: "Endpoint para realizar o registro de um novo usuário.",
    body: z.object({
      username: z.string(),
      password: z.string(),
      confirmPassword: z.string(),
      email: z.string().email()
    })
  }
}
