import { RegisterController } from "./registerController";
import { registerUseCase } from "../../../../application/usecase/authUseCase/register";

export const registerController = new RegisterController(registerUseCase)