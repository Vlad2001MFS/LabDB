import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrder } from "../entity/typeOrder.entity";

@Module({
  imports: [TypeOrmModule.forFeature([typeOrder])],
  providers: [TypeService],
  controllers: [TypeController],
})
export class TypeModule {}
