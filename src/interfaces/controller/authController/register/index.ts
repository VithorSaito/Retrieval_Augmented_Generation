import { RegisterController } from "./registerController.js";
import { registerUseCase } from "../../../../application/usecase/authUseCase/register/index.js";

export const registerController = new RegisterController(registerUseCase)