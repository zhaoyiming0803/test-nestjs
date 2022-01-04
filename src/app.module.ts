import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitysModule } from './citys/citys.module';
// import { Citys } from './citys/entities/city.entity'
import { getMetadataArgsStorage } from 'typeorm';

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
      autoLoadEntities: true
      // entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target)
    }),
    CitysModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
