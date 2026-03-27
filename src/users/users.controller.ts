import {
  Controller, Get, Post, Patch, Delete,
  Body, Param, UseGuards
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../common/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() dto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  softDelete(@Param('id') id: number) {
    return this.service.softDelete(id);
  }

  @Delete('hard/:id')
  hardDelete(@Param('id') id: number) {
    return this.service.hardDelete(id);
  }
}