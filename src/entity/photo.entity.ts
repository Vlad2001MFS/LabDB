import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Photo')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

}
