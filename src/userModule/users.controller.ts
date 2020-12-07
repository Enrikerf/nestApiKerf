import { User } from './../entity/User';
import { AuthGuard } from './../common/guards/AuthGuard';
import { UserDto } from './models/user.dto';
import { ParseIntPipe } from './../common/pipes/parseInt.pipe';
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
  private users;

  constructor(private userService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createUser(@Body() userDto: UserDto): Promise<User> {
    return this.userService.create(userDto);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  modifyUser(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() userDto: UserDto,
  ): Promise<User> {
    return this.userService.modifyById(id, userDto);
  }

  @Put(':id')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  updateUser(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() userDto: UserDto,
  ): Promise<User> {
    return this.userService.updateById(id, userDto);
  }

  @Delete(':id')
  deleteUser(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
    return this.userService.deleteById(id);
  }
}
