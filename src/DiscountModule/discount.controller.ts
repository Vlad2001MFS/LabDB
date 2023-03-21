import { Controller, Get } from '@nestjs/common';
import { DiscountService } from './discount.service';

@Controller('/discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Get('/')
  findAll() {
    return this.discountService.findAll();
  }

  @Get('/add')
  create() {
    return this.discountService.create();
  }

  @Get('/add500')
  create500() {
    return this.discountService.add500();
  }
}
