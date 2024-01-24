import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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
  chapter: string;

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
