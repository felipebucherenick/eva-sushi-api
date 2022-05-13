import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { OrdersService } from 'src/orders/services/orders.service';
import { CreateOrderDto, UpdateOrderDto } from 'src/orders/dtos/orders.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @ApiOperation({ summary: 'Create a order' })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateOrderDto) {
    return this.ordersService.create(payload);
  }

  @ApiOperation({ summary: 'List all the orders' })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return this.ordersService.findAll();
  }

  @ApiOperation({ summary: 'Show a specific order' })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.finOne(id);
  }

  @ApiOperation({ summary: 'Update a order' })
  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOrderDto,
  ) {
    return this.ordersService.update(id, payload);
  }

  @ApiOperation({ summary: 'Delete a order' })
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.delete(id);
  }
}
