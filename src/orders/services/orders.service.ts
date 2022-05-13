import { Injectable, NotFoundException } from '@nestjs/common';

import { Order } from 'src/orders/entities/order.entity';
import { CreateOrderDto, UpdateOrderDto } from 'src/orders/dtos/orders.dto';

@Injectable()
export class OrdersService {
  private counterId = 1;

  private orders: Order[] = [
    {
      id: 1,
      customer: 'socio',
      total: 3000,
      products: 'flauta,pelota,sillon',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  create(payload: CreateOrderDto) {
    this.counterId++;
    const newOrder = {
      id: this.counterId,
      createdAt: new Date(),
      updatedAt: new Date(),
      ...payload,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  findAll() {
    return this.orders;
  }

  finOne(id: number) {
    const order = this.orders.find((order) => order.id === id);
    if (!order) {
      throw new NotFoundException(`The order #${id} doesn't exist`);
    }
    return order;
  }

  update(id: number, payload: UpdateOrderDto) {
    const order = this.finOne(id);
    const index = this.orders.findIndex((order) => order.id === id);
    this.orders[index] = {
      ...order,
      ...payload,
    };
    return this.orders[index];
  }

  delete(id: number) {
    const order = this.finOne(id);
    const index = this.orders.findIndex((order) => order.id === id);
    this.orders.splice(index, 1);
    return order.id;
  }
}
