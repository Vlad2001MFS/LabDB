import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { statusOrder } from "./entity/statusOrder.entity";
import { User } from './entity/user.entity';
import { Order } from './entity/order.entity';
import { Discount } from "./entity/discount.entity";
import { DiscountModule } from './DiscountModule/discount.module';
import { UserModule } from "./UserModule/user.module";
import { OrderModule } from "./OrderModule/order.module";
import { StatusModule } from "./StatusModule/status.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        entities: [Order, User, statusOrder, Discount],
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'labs',
        synchronize: true,
        cli: {
          entitiesDir: './entities',
        },
      }),
    }),
    DiscountModule,
    UserModule,
    OrderModule,
    StatusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
