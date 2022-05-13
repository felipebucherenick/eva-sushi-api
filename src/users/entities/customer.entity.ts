import { ApiProperty } from '@nestjs/swagger';

import { User } from './user.entity';

export class Customer extends User {
  @ApiProperty()
  email: string;
  firstName: string;
  lastName: string;
  phone: number;
  address: string;
  city: string;
}
