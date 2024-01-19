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
    MongooseModule.forRoot(process.env.MONGODB_USER),
    // UsersModule, 
    AnimeListModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}