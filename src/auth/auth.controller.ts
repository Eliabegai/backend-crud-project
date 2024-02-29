import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  async signIn(@Body() signInDto: Record<string, any>) {
    const authUser = await this.authService.singIn(signInDto);
    return authUser;
  }

  @HttpCode(HttpStatus.OK)
  @Post("create")
  createNewUser(@Body() createUserDto: CreateUserDto) {
    try {
      return this.authService.createNewUser(createUserDto);
    } catch (error) {
      return error;
    }
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}
