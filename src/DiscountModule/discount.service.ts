import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { Discount } from "../entity/discount.entity";
import { Order } from "../entity/order.entity";

@Injectable()
export class DiscountService {
  constructor(
    @InjectRepository(Discount)
    private discountRepository: Repository<Discount>,
  ) {}

  async findAll(): Promise<Discount[]> {
    return this.discountRepository.find();
  }

  async add500() {
    for (let i = 1; i < 500000; i++) {
      console.log(i);
      await this.create();
    }
  }

  async create(): Promise<Discount> {
    return this.discountRepository.save({
      name: 'Скидочная карта',
      discount: 5,
    });
  }
}
