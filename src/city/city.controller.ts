import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CitysService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { findCityDto } from './dto/find-city.dto';
import { City, CityInterface } from './entities/city.entity';

@Controller('city')
export class CitysController {
  constructor(private readonly citysService: CitysService) {}

  @Post()
  async create(@Body() createCityDto: CreateCityDto) {
    return await this.citysService.create(createCityDto);
  }

  @Get()
  async findAll() {
    return await this.citysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.citysService.update(+id, updateCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citysService.remove(id);
  }
}
