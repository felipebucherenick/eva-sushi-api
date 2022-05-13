import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  readonly customer: string;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly total: number;
  @IsNotEmpty()
  @IsString()
  readonly products: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
