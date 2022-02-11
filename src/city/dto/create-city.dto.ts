import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsNotEmptyObject,
  IsOptional,
} from 'class-validator';

import { Type } from 'class-transformer'
class Args1 {
  @IsString()
  name: string;
}

class Args3 {
  @IsOptional()
  name: string
}

export class Args2 {
  @IsString()
  name: string;

  @Type(() => Args3)
  @ValidateNested()
  args3: Args3
}
export class CreateCityDto {
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Args2)
  args2: Args2;

  @IsNotEmptyObject()
  @Type(() => Args1)
  @ValidateNested()
  args1: Args1;

  @IsString()
  name: string
}

