import { plainToClass } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCityDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  email: string;

  test: string;

  public static ValueOfGroupEntity(data: any) {
    data.description = data.description ?? '';
    return plainToClass(UpdateCityDto, data, {
      excludeExtraneousValues: true,
    });
  }

  public static ValueOfGroupEntityList(data: []) {
    return data.map((item) => UpdateCityDto.ValueOfGroupEntity(item));
  }
}
