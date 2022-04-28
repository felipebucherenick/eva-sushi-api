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

@Controller('users')
export class UsersController {
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
      user: id,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('payload') payload: any) {
    return {
      userId: id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      userId: id,
    };
  }
}
