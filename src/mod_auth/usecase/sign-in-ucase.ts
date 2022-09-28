import { AuthRequest } from "@/entity/auth"
import { AuthRepository } from "@/mod_auth/repository/auth-repository"

export interface SignInAuthUcase {
  execute(goods: AuthRequest): Promise<void>
}

export class SignInAuthUcaseImpl implements SignInAuthUcase {
  repository: AuthRepository

  constructor(authRepository: AuthRepository) {
    this.repository = authRepository
  }

  async execute(payload: AuthRequest): Promise<void> {
    return await this.repository.signIn(payload)
  }
}
