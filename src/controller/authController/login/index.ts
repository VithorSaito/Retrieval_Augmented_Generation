import { loginUseCase } from "../../../usecases/authUseCase/login";
import { LoginController } from "./login.controller";

export const loginController = new LoginController(loginUseCase)