import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Query,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create accion',
      payload,
    };
  }

  @Get()
  getAll(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      limit: limit,
      offset: offset,
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      product: id,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('payload') payload: any) {
    return {
      productId: id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      productId: id,
    };
  }
}
