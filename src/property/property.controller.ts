import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All Properties';
  }

  // @Post(':id')
  // findOne(@Param('id') id: string) {
  //   return id;
  // }

  @Get(':id/:slug')
  findOne(@Param('id') id, @Param('slug') slug) {
    return `id =${id}, slug =${slug}`;
  }

  @Post()
  create(@Body('name') name) {
    return name;
  }
}
