import { CreateQuestionController } from "./createQuestionController";
import { createQuestionUseCase } from "../../../../application/usecase/questionUseCase/create";

export const createQuestionController = new CreateQuestionController(createQuestionUseCase)