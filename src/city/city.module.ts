import { Module } from '@nestjs/common';
import { CitysService } from './city.service';
import { CitysController } from './city.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { City } from './entities/city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CitysController],
  providers: [CitysService],
})
export class CitysModule {}
