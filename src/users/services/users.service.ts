import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dtos/users.dto';
import { UpdateUserDto } from 'src/users/dtos/users.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(private configService: ConfigService) {}

  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      userName: 'admin',
      password: 'admin123',
      role: 'admin',
    },
  ];

  create(payload: CreateUserDto) {
    this.counterId++;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  finAll() {
    const dbName = this.configService.get('DB_NAME');
    console.log(dbName);
    return this.users;
  }

  finOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`The user #${id} doesn't exist`);
    }
    return user;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.finOne(id);
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = {
      ...user,
      ...payload,
    };
    return this.users[index];
  }

  delete(id: number) {
    const user = this.finOne(id);
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    return user.id;
  }
}
