import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { statusOrder } from "../entity/statusOrder.entity";

@Module({
  imports: [TypeOrmModule.forFeature([statusOrder])],
  providers: [StatusService],
  controllers: [StatusController],
})
export class StatusModule {}
