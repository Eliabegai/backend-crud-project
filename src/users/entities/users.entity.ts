import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop()
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  rule: string;

  @Prop()
  status: string;

  @Prop({ type: Date })
  createAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
