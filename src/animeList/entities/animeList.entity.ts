import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AnimeList {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  chapter: number;

  @Column()
  status: string;

  @Column({ type:'json', nullable: true})
  scan: {
    name: string;
    url: string;
  }

  @Column()
  imageUrl: string;
}