import { Module } from "@nestjs/common";
import { AnimeListService } from "./animeList.service";
import { AnimeListController } from "./animeList.controllet";
import { AnimeSchema } from "./entities/animeList.entity";
import { MongooseModule } from "@nestjs/mongoose";

import "dotenv";
require("dotenv").config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      {
        name: "AnimeList",
        schema: AnimeSchema,
      },
    ]),
  ],
  controllers: [AnimeListController],
  providers: [AnimeListService],
})
export class AnimeListModule {}
