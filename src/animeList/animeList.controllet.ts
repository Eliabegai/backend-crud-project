import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";

import { AnimeListService } from "./animeList.service";
import { CreateAnimeListDto } from "./dto/create-animeList.dto";
import { UpdateAnimeListDto } from "./dto/update-animeList.dto";
import { AuthGuard } from "src/auth/auth.guard";

@UseGuards(AuthGuard)
@Controller("/animes")
export class AnimeListController {
  constructor(private readonly animeListService: AnimeListService) {}

  @Post()
  async create(@Body() createAnimeListDto: CreateAnimeListDto) {
    return await this.animeListService.create(createAnimeListDto);
  }

  @Get()
  findAll() {
    return this.animeListService.findAll();
  }
  //requisição /animes/status/:status
  @Get("/status/:status")
  findAllByStatus(@Param("status") status: string) {
    return this.animeListService.findAllByStatus(status);
  }

  //requisição /animes/name/:name
  @Get("/name/:name")
  findAllByName(@Param("name") name: string) {
    return this.animeListService.findAllByName(name);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.animeListService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() upadateAnimeListDto: UpdateAnimeListDto,
  ) {
    return this.animeListService.update(id, upadateAnimeListDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.animeListService.remove(id);
  }
}
