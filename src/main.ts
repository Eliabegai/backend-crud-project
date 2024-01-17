import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv'

async function bootstrap() {
  require('dotenv').config()
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || 3000

  console.log(process.env.USERNAME)

  app.enableCors();

  await app.listen(PORT, () => console.log(`Server Running in  ${ PORT }`));

}
bootstrap();
