import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Order } from './order.entity';
import { Photo } from './photo.entity';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({
    default: 10,
  })
  age: number;

  @OneToMany((type) => Order, (order) => order.User)
  orders: Order[];

  @OneToMany((type) => Photo, (photo=) => photo.Photo) // specify inverse side as a second parameter
  Photo: Photo;

  @Column({
    default: 'Tom',
  })
  name3: string;
}
