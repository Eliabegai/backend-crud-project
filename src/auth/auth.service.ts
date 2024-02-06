import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
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
  ): Promise<{ access_token?: string }> {
    try {
      const user = await this.userService.findOne(
        signInDto.username,
        signInDto.password,
      );

      const payload = {
        username: user.username,
        rule: user.rule,
        status: user.status,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch {
      throw new UnauthorizedException();
    }
  }

  async createNewUser(
    signInDto: CreateUserDto,
  ): Promise<{ access_token?: string }> {
    try {
      await this.userService.create(signInDto);

      const payload = {
        username: signInDto.username,
        rule: signInDto.rule,
        status: signInDto.status,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      throw new BadRequestException("Something bad happened", {
        cause: new Error(),
        description: "Already registered user",
      });
    }
  }
}
