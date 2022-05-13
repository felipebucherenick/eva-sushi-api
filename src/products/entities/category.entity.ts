import { ApiProperty } from '@nestjs/swagger';

export class Category {
  @ApiProperty()
  id: number;
  title: string;
  description: string;
  image: string;
}
