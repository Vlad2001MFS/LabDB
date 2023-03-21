import { Controller, Get } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('/status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get('/')
  findAll() {
    return this.statusService.findAll();
  }

  @Get('/add')
  create() {
    return this.statusService.create();
  }

  @Get('/add500')
  create500() {
    return this.statusService.add500();
  }
}
