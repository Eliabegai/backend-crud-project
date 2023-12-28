import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimeListDto } from './create-animeList.dto';

export class UpdateAnimeListDto extends PartialType(CreateAnimeListDto) {}