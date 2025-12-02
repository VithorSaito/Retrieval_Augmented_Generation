import { loginRepository } from "../../../repository/authRepository/login";
import { LoginUseCase } from "./login.usecase";

export const loginUseCase = new LoginUseCase(loginRepository)