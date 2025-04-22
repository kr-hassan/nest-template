import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe, Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All Properties';
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: string,
    @Query('sort', ParseBoolPipe) sort,
  ) {
    console.log(sort);
    return id;
  }

  // @Get(':id/:slug')
  // findOne(@Param('id') id, @Param('slug') slug) {
  //   return `id =${id}, slug =${slug}`;
  // }

  @Post()
  // @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  create(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        groups: ['create'],
      }),
    )
    body: CreatePropertyDto,
  ) {
    return body;
  }

  @Patch(':id')
  update(
    @Body(new ValidationPipe({ whitelist: true, groups: ['update'] }))
    body: CreatePropertyDto,
  ) {
    return body;
  }
}
