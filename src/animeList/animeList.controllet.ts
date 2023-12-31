import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';

import { AnimeListService } from './animeList.service';
import { CreateAnimeListDto } from './dto/create-animeList.dto';
import { UpdateAnimeListDto } from './dto/update-animeList.dto';

@Controller('/animes')
export class AnimeListController {
  constructor(
    private readonly animeListService: AnimeListService
  ){}

  @Post()
  async create(@Body() createAnimeListDto:CreateAnimeListDto){
    return await this.animeListService.create(createAnimeListDto)
  }

  @Get()
  findAll() {
    console.log('Get All Values')
    return this.animeListService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animeListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() upadateAnimeListDto: UpdateAnimeListDto) {
    return this.animeListService.update(+id, upadateAnimeListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animeListService.remove(+id);
  }
}