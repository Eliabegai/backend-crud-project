import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AnimeListModule } from './animeList/animeList.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig'

@Module({
  imports: [
    UsersModule, 
    AnimeListModule, 
    MongooseModule.forRoot('mongodb+srv://eliabegai:Gi70vpMMCnnM20L7@cluster0.atuhfqo.mongodb.net/'),
    // TypeOrmModule.forRoot(config)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}