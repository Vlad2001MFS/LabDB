import { Controller, Get } from '@nestjs/common';
import { TypeService } from './type.service';

@Controller('/type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Get('/')
  findAll() {
    return this.typeService.findAll();
  }

  @Get('/add')
  create() {
    return this.typeService.create();
  }

  @Get('/add500')
  create500() {
    return this.typeService.add500();
  }
}
