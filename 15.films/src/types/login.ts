export interface TokenPayload {
  id: number;
  email: string;
  role: string;
}

export interface LoginResult {
  payload: TokenPayload;
}
