import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsNotEmptyObject,
  IsOptional,
} from 'class-validator';
class Args1 {
  name: string;
}
export class CreateCityDto {
  @IsNotEmptyObject()
  @ValidateNested()
  args2: Args2;

  @IsNotEmptyObject()
  @ValidateNested()
  args1: Args1;
}

export class Args2 {
  name: string;

  @ValidateNested()
  args3: Args3
}

class Args3 {
  @IsOptional()
  name: string
}
