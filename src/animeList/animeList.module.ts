import { Module } from '@nestjs/common';
import { AnimeListService } from './animeList.service';
import { AnimeListController } from './animeList.controllet';
import { NewAnimeList, AnimeSchema } from './entities/animeList.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
    { 
      name: NewAnimeList.name, 
      schema: AnimeSchema }
  ])
],
  controllers: [AnimeListController],
  providers: [AnimeListService],
})
export class AnimeListModule {}
