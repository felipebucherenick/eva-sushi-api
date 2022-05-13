import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty()
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}
