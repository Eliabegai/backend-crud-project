import { Injectable } from "@nestjs/common";

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: "eliabegai",
      password: "12345",
      role: "user",
    },
    {
      userId: 2,
      username: "admin",
      password: "admin",
      role: "admin",
    },
    {
      userId: 3,
      username: "john",
      password: "changeme",
      role: "user",
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
