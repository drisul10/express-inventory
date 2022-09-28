import { AuthRequest } from "@/entity/auth"
import { AuthDatasource } from "@/mod_auth/data-source/mongodb/auth-datasource"

export interface AuthRepository {
  signUp(payload: AuthRequest): Promise<void>
  signIn(payload: AuthRequest): Promise<void>
}

export class AuthRepositoryImpl implements AuthRepository {
  dataSource: AuthDatasource

  constructor(authDatasource: AuthDatasource) {
    this.dataSource = authDatasource
  }

  async signUp(payload: AuthRequest) {
    await this.dataSource.signUp(payload)
  }

  async signIn(payload: AuthRequest) {
    await this.dataSource.signIn(payload)
  }
}
