import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { typeOrder } from '../entity/typeOrder.entity';

@Injectable()
export class TypeService {
  constructor(
    @InjectRepository(typeOrder)
    private typeRepository: Repository<typeOrder>,
  ) {}

  async findAll(): Promise<typeOrder[]> {
    return this.typeRepository.find();
  }

  async add500() {
    for (let i = 2; i < 500000; i++) {
      console.log(i);
      await this.create();
    }
  }

  async create(): Promise<typeOrder> {
    return this.typeRepository.save({
      name: 'Принят',
    });
  }
}
