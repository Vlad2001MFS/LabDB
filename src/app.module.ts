import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrder } from './entity/typeOrder.entity';
import { User } from './entity/user.entity';
import { Order } from './entity/order.entity';
import { Photo } from './entity/photo.entity';
import { PhotoModule } from './PhotoModule/photo.module';
import { UserModule } from "./UserModule/user.module";
import { OrderModule } from "./OrderModule/order.module";
import { TypeModule } from "./TypeModule/type.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        entities: [Order, User, typeOrder, Photo],
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'stud',
        synchronize: true,
        cli: {
          entitiesDir: './entities',
        },
      }),
    }),
    PhotoModule,
    UserModule,
    OrderModule,
    TypeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
