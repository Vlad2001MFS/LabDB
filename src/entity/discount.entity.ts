import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Discount {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  discount: number;

  @ManyToOne((type) => User, (user) => user.orders)
  Discount: Discount;

  @Column({ default: 2 })
  discountId: number;
}
