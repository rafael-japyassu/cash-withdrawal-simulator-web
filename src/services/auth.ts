import { httpClient } from "./http-client";

export type AuthenticateDto = {
  email: string;
  password: string;
};

class AuthService {
  async auth(data: AuthenticateDto) {
    return httpClient.post("/v1/auth", data);
  }
}

const authService = new AuthService();

export { authService };
