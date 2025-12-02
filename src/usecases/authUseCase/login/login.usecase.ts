import { compare } from "bcrypt";
import { LoginRepository } from "../../../repository/authRepository/login/login.repository";

export class LoginUseCase {
  constructor(private loginRepository: LoginRepository) { }

  async execute(email: string, password: string) {

    const findUser = await this.loginRepository.findUser(email);

    if (!findUser) {
      throw new Error("Usuário não encontrado!");
    }

    const validatePassword = await compare(password, findUser.password);

    if (!validatePassword) {
      throw new Error("Senha inválida!");
    }

    return findUser.username

  }
}