import { LoginUseCase } from "./loginUsecase.js";
import { comparerCrypto } from "../../../../infrastructure/utils/bcrypt/comparer/index.js";
import { loginRepository } from "../../../../infrastructure/repository/authRepository/login/index.js";

export const loginUseCase = new LoginUseCase(loginRepository, comparerCrypto)