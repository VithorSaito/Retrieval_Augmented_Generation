import { LoginController } from "./loginController";
import { loginUseCase } from "../../../../application/usecase/authUseCase/login";

export const loginController = new LoginController(loginUseCase)
