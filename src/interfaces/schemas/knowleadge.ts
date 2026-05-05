import z from "zod";

export const knowledgeSchemas = {
  createKnowledge: {
    tags: ["Knowledge"],
    description: "Endpoint para criar um novo conhecimento.",
    body: z.object({
      title: z.string(),
      category: z.string(),
      problem: z.string(),
      environment: z.string(),
      solution: z.string()
    })
  },
  question: {
    tags: ["websocket"],
    description: "Endpoint para fazer uma pergunta sobre o conhecimento.",
  }
}