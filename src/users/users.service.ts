import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from "./entities/users.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcrypt";

export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectModel("Users") private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const hash = await bcrypt.hash(createUserDto.password, 10);

    const user = {
      username: createUserDto.username,
      name: createUserDto.name,
      email: createUserDto.email,
      rule: createUserDto.rule,
      status: createUserDto.status,
      password: hash,
      createAt: new Date(),
    };

    try {
      const newUser = new this.userModel(user);
      return newUser.save();
    } catch (error) {
      return error;
    }
  }

  async findOne(username: string, password: string): Promise<User | undefined> {
    const data = await this.userModel.find(
      {
        $or: [{ username: { $in: username } }],
      },
      {
        __v: false,
      },
    );

    const isMatch = await bcrypt.compare(password, data[0].password);

    try {
      if (isMatch) {
        return data;
      }
    } catch (error) {
      return error;
    }
  }
}
