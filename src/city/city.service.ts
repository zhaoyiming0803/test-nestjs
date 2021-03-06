import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

class Service {}
class BaseService extends Service {
  static readonly serviceName: string = 'BaseService';
}

@Injectable()
export class CitysService extends BaseService {
  constructor(
    @InjectRepository(City) private cityRepository: Repository<City>,
  ) {
    super();
  }

  async create(createCityDto: CreateCityDto) {
    return 123;
    // return await this.cityRepository.save(createCityDto);
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
