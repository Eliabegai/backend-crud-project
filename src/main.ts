import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import 'dotenv';

async function bootstrap() {
  require('dotenv').config();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();

  const port = process.env.PORT || 8080;

  await app.listen(port);

  console.log(`Server Running in  ${port}`);
}
bootstrap();
