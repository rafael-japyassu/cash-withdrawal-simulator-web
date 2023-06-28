import { httpClient } from "./http-client";

export type CreateUserDto = {
  name: string;
  email: string;
  password: string;
};

class UserService {
  async create(data: CreateUserDto) {
    return httpClient.post("/v1/users", data);
  }
}

const userService = new UserService();

export { userService };
