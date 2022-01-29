import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitysModule } from './city/city.module';
// import { City } from './citys/entities/city.entity'
import { getMetadataArgsStorage } from 'typeorm';
import { UsersModule } from './user/user.module';
import { CouponModule } from './coupon/coupon.module';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'mysql',
  //     host: 'localhost',
  //     port: 3306,
  //     username: 'root',
  //     password: '12345678',
  //     database: 'tour',
  //     synchronize: true,
  //     autoLoadEntities: true,
  //     // entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target)
  //   }),
  //   CitysModule,
  //   UsersModule,
  //   CouponModule,
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
