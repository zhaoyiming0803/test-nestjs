import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CitysService {
  constructor(
    @InjectRepository(City) private cityRepository: Repository<City>,
  ) {}

  async create(createCityDto: CreateCityDto) {
    return await this.cityRepository.save(createCityDto);
  }

  findAll(): Promise<City[]> {
    return this.cityRepository.find();
  }

  findOne(id: number) {
    return this.cityRepository.findByIds([id]);
  }

  async update(id: number, updateCityDto: UpdateCityDto) {
    return await this.cityRepository.update(id, updateCityDto);
  }

  async remove(id: string) {
    return await this.cityRepository.delete(id);
  }
}
