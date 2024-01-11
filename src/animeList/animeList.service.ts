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

  async findAll() {
    const data = await this.animeListRepository.createQueryBuilder('animeList')
    .orderBy('animeList.name', 'ASC')
    .getMany()
    const count = await this.animeListRepository.count()

    return {
      data: data,
      count: count
    };
  }

  async findAllByStatus(status: string){
    const data = await this.animeListRepository.createQueryBuilder('animeList')
    .where('animeList.status = :status', { status })
    .orderBy('animeList.name', 'ASC')
    .getMany()
    const count = await this.animeListRepository.countBy({ status })
    return {
      data: data,
      count: count
    };
  }

  async findAllByName(name: string){
    const data = await this.animeListRepository.createQueryBuilder('animeList')
    .where('animeList.name LIKE :letra', { letra: `${name}%` })
    .orderBy('animeList.name', 'ASC')
    .getMany()
    const count = await this.animeListRepository.countBy({ name })
    return {
      data: data,
      count: count
    };
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