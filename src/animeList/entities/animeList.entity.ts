// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnimeDocument = NewAnimeList & Document;

@Schema()
export class NewAnimeList {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  password: string;

  @Prop()
  chapter: number;

  @Prop()
  status: string;

  @Prop({ type: Array})
  scan: {
    name: string;
    url: string;
  }

  @Prop()
  imageUrl: string;
}

export const AnimeSchema = SchemaFactory.createForClass(NewAnimeList);

// @Entity()
// export class AnimeList {
//   @PrimaryGeneratedColumn('increment')
//   id: number;

//   @Column()
//   name: string;

//   @Column()
//   type: string;

//   @Column()
//   chapter: number;

//   @Column()
//   status: string;

//   @Column({ type:'json', nullable: true})
//   scan: {
//     name: string;
//     url: string;
//   }

//   @Column()
//   imageUrl: string;
// }





