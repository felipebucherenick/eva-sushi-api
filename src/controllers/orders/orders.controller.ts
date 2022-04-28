import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Post()
  create(@Body('payload') payload: any) {
    return {
      message: 'create accion',
      payload,
    };
  }

  @Get()
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      limit: limit,
      offfset: offset,
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      order: id,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('payload') payload: any) {
    return {
      orderId: id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      orderId: id,
    };
  }
}
