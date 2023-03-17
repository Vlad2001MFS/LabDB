import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";

import { Order } from './order.entity';

@Entity('typeOrder')
export class typeOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @OneToMany((type) => Order, (order) => order.TypesOrder)
  orders: Order[];
}
