import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';

@Module({})
export class OrdersModule {
  controllers: [OrdersController];
  providers: [OrdersService];
}
