import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv'
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  require('dotenv').config()
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const port = process.env.PORT || 3000

  await app.listen(port);

  console.log(`Server Running in  ${ port }`)

}
bootstrap();
