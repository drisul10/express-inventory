export interface Auth {
  _id: string
  id_user: string
  email: string
  password: string
}

export interface AuthRequest {
  id_user: string
  email: string
  password: string
}

export interface AuthResponse {
  id_user: string
  email: string
  password: string
}
