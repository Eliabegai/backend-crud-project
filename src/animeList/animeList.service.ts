import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnimeListDto } from './dto/create-animeList.dto';
import { UpdateAnimeListDto } from './dto/update-animeList.dto';
import { AnimeList } from './entities/animeList.entity';

@Injectable()
export class AnimeListService {
  constructor(
    @InjectRepository(AnimeList)
    private animeListRepository: Repository<AnimeList>
  ){}
  
  create(createAnimeListDto: CreateAnimeListDto) {
    return this.animeListRepository.save(createAnimeListDto)
  }

  findAll() {
    return this.animeListRepository.find();
  }

  findOne(id: number) {
    return this.animeListRepository.findOneBy({ id: id });
  }

  update(id: number, updateAnimeListDto: UpdateAnimeListDto) {
    return this.animeListRepository.update(id, updateAnimeListDto);
  }

  remove(id: number) {
    return this.animeListRepository.delete(id);
  }

}