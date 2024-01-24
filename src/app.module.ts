import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimeListModule } from './animeList/animeList.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AnimeSchema } from './animeList/entities/animeList.entity';
import 'dotenv'

require('dotenv').config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      { 
        name: 'AnimeList', 
        schema: AnimeSchema }
    ]),
    AnimeListModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}