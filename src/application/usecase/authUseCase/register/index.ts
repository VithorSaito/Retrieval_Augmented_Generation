import { RegisterUseCase } from "./registerUsecase.js";
import { hashCrypto } from "../../../../infrastructure/utils/bcrypt/hash/index.js";
import { registerRepository } from "../../../../infrastructure/repository/authRepository/register/index.js";

export const registerUseCase = new RegisterUseCase(registerRepository, hashCrypto)