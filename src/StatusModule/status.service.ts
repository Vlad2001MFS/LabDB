import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { statusOrder } from '../entity/statusOrder.entity';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(statusOrder)
    private typeRepository: Repository<statusOrder>,
  ) {}

  async findAll(): Promise<statusOrder[]> {
    return this.typeRepository.find();
  }

  async add500() {
    for (let i = 2; i < 500000; i++) {
      console.log(i);
      await this.create();
    }
  }

  async create(): Promise<statusOrder> {
    return this.typeRepository.save({
      name: 'Заказ добавлен в работу',
    });
  }
}
