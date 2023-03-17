import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { typeOrder } from './typeOrder.entity';
import { User } from './user.entity';

@Entity('Order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne((type) => User, (user) => user.orders)
  User: User;

  @ManyToOne((type) => typeOrder, (typeOrder) => typeOrder.orders)
  TypesOrder: typeOrder;

  @Column({ default: 1 })
  userId: number;

  @Column({ default: 2 })
  typesOrderId: number;
}
