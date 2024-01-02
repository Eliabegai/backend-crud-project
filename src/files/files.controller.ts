import {
  Controller,
  Post,
  Get,
  UseInterceptors,
  UploadedFile,
  Req,
  UploadedFiles
} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import multerConfig from './multer-config';
import { Request } from 'express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('arquivo', multerConfig))
  uploadArquivo(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request,
  ) {
    const img = this.filesService.salvarDados(file, req)
    return img
  }

  @Post('varios')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'arquivos' }], multerConfig))
  uploadVariosArquivos(
    @UploadedFiles()
    files: Express.Multer.File[],
    @Req() req: Request,
  ) {
    return this.filesService.salvarVariosDados(files['arquivos'], req);
  }

  @Post('insert')
  saveImageCloud(file){
    return this.filesService.saveImageCloud(file)
  }

  @Get()
  findAll() {
    return this.filesService.findAll()
  }
}
