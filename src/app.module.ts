import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './PhotoModule/photo.module';
import { Photo } from './entity/photo.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        entities: [Photo],
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'lab',
        synchronize: true,
        cli: {
          entitiesDir: './entities',
        },
      }),
    }),
    PhotoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
