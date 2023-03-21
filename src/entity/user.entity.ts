import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Order } from './order.entity';
import { Discount } from './discount.entity';

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

  @OneToMany((type) => Discount, (dicount) => dicount.Discount)
  Dicsount: Discount;

  @Column({
    default: 'Новочеркасск',
  })
  city: string;
}
