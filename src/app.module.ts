import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimeListModule } from './animeList/animeList.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv'
import { AnimeSchema, NewAnimeList } from './animeList/entities/animeList.entity';

require('dotenv').config()

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      { 
        name: NewAnimeList.name, 
        schema: AnimeSchema }
    ]),
    AnimeListModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}