import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from './entities/file.entity';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { Request } from 'express';
import { storage } from 'src/libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage"
import {v4 as createID} from 'uuid'



@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private fotoRepository: Repository<File>,
  ) {}
  // /Users/eliabegai/Desktop/my-anime-list/backend/crud-project/upload/files/Eleceed-8c9e1fd9-3f26-4eab-96fb-640c97d87b04.webp

  // upload/files/Eleceed-8c9e1fd9-3f26-4eab-96fb-640c97d87b04.webp
  async salvarDados(file: Express.Multer.File, req: Request) {
    const arquivo = new File();
    arquivo.fileName = file.filename;
    arquivo.contentLength = file.size;
    arquivo.contentType = file.mimetype;
    // arquivo.url = `${req.protocol}://${req.get('host')}/files/${file.filename}`;
    arquivo.url = `/Users/eliabegai/Desktop/my-anime-list/backend/crud-project/upload/files/${file.filename}`;

    return await this.fotoRepository.save(arquivo);
  }

  async salvarVariosDados(files: Express.Multer.File[], req: Request) {
    const arrayArquivos = files.map((file) => {
      const arquivo = new File();
      arquivo.fileName = file.filename;
      arquivo.contentLength = file.size;
      arquivo.contentType = file.mimetype;
      arquivo.url = `${req.protocol}://${req.get('host')}/files/${
        file.filename
      }`;
      return arquivo;
    });

    return await this.fotoRepository.save(arrayArquivos);
  }

  async saveImageCloud(file: File) {
    console.log(file)
  }

  findAll() {
    return this.fotoRepository.find();
  }
}
