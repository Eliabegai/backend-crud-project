import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnimeListModule } from './animeList/animeList.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv'

require('dotenv').config()

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.atuhfqo.mongodb.net/`),
    UsersModule, 
    AnimeListModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}