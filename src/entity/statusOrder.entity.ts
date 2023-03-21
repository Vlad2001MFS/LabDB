import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";

import { Order } from './order.entity';

@Entity('statusOrder')
export class statusOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToMany((type) => Order, (order) => order.StatusOrder)
  orders: Order[];
}
