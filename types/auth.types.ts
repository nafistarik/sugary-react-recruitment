export interface User {
  id: string
  userName: string
  email: string
  firstName: string
  lastName: string
}

export interface AuthState {
  user: User | null
  token: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  accessTokenExpiresAt: string | null
  refreshTokenExpiresAt: string | null
}

export interface LoginCredentials {
  UserName: string
  Password: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  accessTokenExpiresAt: string
  refreshTokenExpiresAt: string
  user: User
}

export interface RefreshTokenRequest {
  accessToken: string
  refreshToken: string
}

export interface RefreshTokenResponse {
  accessToken: string
  refreshToken: string
  accessTokenExpiresAt: string
  refreshTokenExpiresAt: string
}
