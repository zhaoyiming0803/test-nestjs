import { Module } from '@nestjs/common';
import { CitysService } from './citys.service';
import { CitysController } from './citys.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Citys } from '../citys/entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Citys])],
  controllers: [CitysController],
  providers: [CitysService]
})
export class CitysModule {}
