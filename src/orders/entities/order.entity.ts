import { ApiProperty } from '@nestjs/swagger';

export class Order {
  @ApiProperty()
  id: number;
  customer: string;
  total: number;
  products: string;
  createdAt: Date;
  updatedAt: Date;
}
