import { AuthRequest } from "@/entity/auth"
import { AuthRepository } from "@/mod_auth/repository/auth-repository"

export interface SignUpAuthUcase {
  execute(goods: AuthRequest): Promise<void>
}

export class SignUpAuthUcaseImpl implements SignUpAuthUcase {
  repository: AuthRepository

  constructor(authRepository: AuthRepository) {
    this.repository = authRepository
  }

  async execute(payload: AuthRequest): Promise<void> {
    return await this.repository.signUp(payload)
  }
}
