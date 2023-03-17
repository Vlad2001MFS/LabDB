import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from '../entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from '../entity/photo.entity';
import { Order } from '../entity/order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
