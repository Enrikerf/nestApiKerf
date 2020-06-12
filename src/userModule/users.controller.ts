import { AuthGuard, Roles } from './../common/guards/AuthGuard';
import { UserDto } from './models/user.dto';
import { ParseIntPipe } from './../common/pipes/parseInt.pipe';
import { User } from './models/user.interface';
import { UsersService } from './users.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';

@Controller('users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @Roles('admin')
  findAll(): User[] {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id', new ParseIntPipe()) id: number): User {
    return this.userService.findById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body('name') userDto: UserDto): User {
    return this.userService.create(userDto);
  }

  @Patch(':id')
  modifyUser(
    @Param('id', new ParseIntPipe()) id: number,
    @Body('name') name: string,
  ): User {
    return this.userService.modifyById(id, name);
  }

  @Put(':id')
  updateUser(
    @Param('id', new ParseIntPipe()) id: number,
    @Body('name') name: string,
  ): User {
    return this.userService.updateById(id, name);
  }

  @Delete(':id')
  deleteUser(@Param('id', new ParseIntPipe()) id: number): User {
    return this.userService.deleteById(id);
  }
}
