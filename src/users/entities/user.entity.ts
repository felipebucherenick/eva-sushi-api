import { ApiProperty } from '@nestjs/swagger';
export class User {
  @ApiProperty()
  id: number;
  userName: string;
  password: string;
  role: string;
}
