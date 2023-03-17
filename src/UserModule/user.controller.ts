import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  findAll() {
    return this.userService.findAll();
  }

  @Get('/add')
  create() {
    return this.userService.create();
  }

  @Get('/add500')
  create500() {
    return this.userService.add500();
  }
}
