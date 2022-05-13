import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from 'src/users/entities/customer.entity';
import { CreateCustomerDto } from 'src/users/dtos/customers.dto';
import { UpdateCustomerDto } from 'src/users/dtos/customers.dto';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      userName: 'ComisarioRex',
      password: 'customer123',
      role: 'customer',
      email: 'customer@mail.com',
      firstName: 'Rex',
      lastName: 'Comisario',
      phone: 25632145,
      address: 'el perro 2489',
      city: 'Lota',
    },
  ];

  create(payload: CreateCustomerDto) {
    this.counterId++;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((customer) => customer.id === id);
    if (!customer) {
      throw new NotFoundException(`the customer #${id} doesn't exist`);
    }
    return customer;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const customer = this.findOne(id);
    const index = this.customers.findIndex((customer) => customer.id === id);
    this.customers[index] = {
      ...customer,
      ...payload,
    };
    return this.customers[index];
  }

  delete(id: number) {
    const customer = this.findOne(id);
    const index = this.customers.findIndex((customer) => customer.id === id);
    this.customers.splice(index, 1);
    return customer.id;
  }
}
