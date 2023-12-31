import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnimeListModule } from './animeList/animeList.module';
import { config } from './ormconfig';
import { FilesModule } from './files/files.module';

@Module({
  imports: [UsersModule, AnimeListModule, TypeOrmModule.forRoot(config), FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}