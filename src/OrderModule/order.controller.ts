import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('/order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/')
  findAll() {
    return this.orderService.findAll();
  }

  @Get('/add')
  create() {
    return this.orderService.create();
  }

  @Get('/add500')
  create500() {
    return this.orderService.add500();
  }
}
