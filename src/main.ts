import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv'
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  require('dotenv').config()
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const PORT = process.env.PORT || 3000

  console.log(process.env.USERNAME)

  app.enableCors();

  await app.listen(PORT, () => console.log(`Server Running in  ${ PORT }`));

}
bootstrap();
