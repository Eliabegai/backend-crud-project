import { Module } from '@nestjs/common';
import { AnimeListService } from './animeList.service';
import { AnimeListController } from './animeList.controllet';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimeList } from './entities/animeList.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AnimeList])],
  controllers: [AnimeListController],
  providers: [AnimeListService],
})
export class AnimeListModule {}
