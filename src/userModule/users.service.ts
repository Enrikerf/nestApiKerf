import { User } from './models/user.interface';
import { UserDto } from './models/user.dto';
import { repeatedUserException } from './exceptions/repeatedUser.exception';
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll(): User[] {
    return [{ id: 1, name: 'pepe' }];
  }
  findById(userId: number): User {
    if (0) {
      throw new NotFoundException('user not found');
    } else {
      return { id: 1, name: 'pepe' };
    }
  }
  create(userDto: UserDto): User {
    if (0) {
      throw new repeatedUserException({ id: 1, name: 'pepe' });
    } else {
      return { id: 1, name: 'pepe' };
    }
  }
  modifyById(userId: number, name: string): User {
    if (0) {
      throw new NotFoundException('user not found');
    } else {
      return { id: 1, name: 'pepe' };
    }
  }
  updateById(userId: number, name: string): User {
    if (0) {
      throw new NotFoundException('user not found');
    } else {
      return { id: 1, name: 'pepe' };
    }
  }
  deleteById(userId: number): User {
    if (0) {
      throw new NotFoundException('user not found');
    } else {
      return { id: 1, name: 'pepe' };
    }
  }
}
