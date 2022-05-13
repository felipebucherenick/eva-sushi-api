import { PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly description: string;
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
