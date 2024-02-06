import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/users/dto/create-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(
    signInDto: Record<string, any>,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findOne(signInDto.username);
    if (user?.password !== user?.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async createNewUser(
    signInDto: CreateUserDto,
  ): Promise<{ access_token?: string; message?: string }> {
    try {
      await this.userService.create(signInDto);

      const payload = {
        username: signInDto.username,
        rule: signInDto.rule,
        status: signInDto.status,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
        message: "Usuário Cadastrado com Sucesso!",
      };
    } catch (error) {
      return {
        message: error,
      };
    }
  }
}
