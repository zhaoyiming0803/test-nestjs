import { TypeOrmModule } from '@nestjs/typeorm'
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CitysModule } from './city/city.module'
// import { City } from './citys/entities/city.entity'
import { getMetadataArgsStorage } from 'typeorm'
import { UsersModule } from './user/user.module'
import { CouponModule } from './coupon/coupon.module'
import { LoggerMiddleware } from './middlewares/logger.middleware'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'tour',
      synchronize: true,
      autoLoadEntities: true,
      // entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target)
    }),
    CitysModule,
    UsersModule,
    CouponModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure (consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({
        path: '*',
        method: RequestMethod.POST,
      }, {
        path: '/user/*',
        method: RequestMethod.GET
      })
  }
}
