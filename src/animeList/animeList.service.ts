import { Injectable } from '@nestjs/common';
import { CreateAnimeListDto } from './dto/create-animeList.dto';
import { UpdateAnimeListDto } from './dto/update-animeList.dto';
import { AnimeDocument } from './entities/animeList.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteResult } from 'typeorm/driver/mongodb/typings';

@Injectable()
export class AnimeListService {

  constructor(@InjectModel('AnimeList') private animeModel: Model<AnimeDocument>) {}
  
  create(createAnimeListDto: CreateAnimeListDto) {
    const anime = new this.animeModel(createAnimeListDto)
    return anime.save()
  }

  async findAll() {

    const data = await this.animeModel.find({}, {__v: false}).sort({name: +1}).exec()

    return {
      data: data,
      count: data.length
    };
  }

  async findAllByStatus(status: string){

    const data = await this.animeModel.find()

    return {
      data: data,
      count: data.length
    }
  }

  async findAllByName(name: string){

    const data = await this.animeModel.find({ name: {
      "$regex": name
    } }).sort({ name: +1})

    return {
      data: data,
      count: data.length
    }
  }

  async findOne(id: string) {
    const data = await this.animeModel.findById(id)
    return {
      data: data,
      count: 1
    } ;
  }

  update(id: string, updateAnimeListDto: UpdateAnimeListDto) {
    return this.animeModel.findByIdAndUpdate({
      _id:id
    },
    {
      $set: updateAnimeListDto
    },
    {
      new: true
    });
  }

  remove(id: string):Promise<DeleteResult> {
    return this.animeModel.deleteOne({_id : id}).exec();
  }

}