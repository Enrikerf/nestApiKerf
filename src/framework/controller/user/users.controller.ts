import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(): string {
    return 'users';
  }
  @Get(':id')
  getUser(@Param('id') id: string): any {
    return 'users';
  }
  @Post()
  createUser(@Body('name') name: string): any {
    return { name: 'pepe' };
  }
}
