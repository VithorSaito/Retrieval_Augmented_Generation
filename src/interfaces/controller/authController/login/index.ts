import { LoginController } from "./loginController.js";
import { loginUseCase } from "../../../../application/usecase/authUseCase/login/index.js";

export const loginController = new LoginController(loginUseCase)
