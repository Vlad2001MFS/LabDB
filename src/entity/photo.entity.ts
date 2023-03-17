import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn, ManyToOne
} from "typeorm";
import { User } from './user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  name1: string;

  @ManyToOne((type) => User, (user) => user.orders)
  Photo: Photo;

  @Column({ default: 2 })
  photoId: number;
}
