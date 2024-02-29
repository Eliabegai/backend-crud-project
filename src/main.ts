import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { config } from "dotenv";
import * as coockieParser from "cookie-parser";

async function bootstrap() {
  config();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.use(coockieParser());

  const port = process.env.PORT || 3333;

  await app.listen(port);

  console.log(`Server Running in  ${port}`);
}
bootstrap();
