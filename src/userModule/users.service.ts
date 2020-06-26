import { User } from './../entity/User';
import { City } from './../entity/City';
import { async } from 'rxjs/internal/scheduler/async';
import { createConnection, Repository } from 'typeorm';
import { UserDto } from './models/user.dto';
import { repeatedUserException } from './exceptions/repeatedUser.exception';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(userId: number): Promise<User> {
    return this.userRepository.findOne(userId);
  }

  async create(userDto: UserDto): Promise<any> {
    return this.userRepository.insert(userDto);
  }

  async modifyById(userId: number, userDto: UserDto): Promise<User> {
    try {
      const userToUpdate = await this.userRepository.findOne(userId);
      const userUpdated = await this.userRepository.merge(userToUpdate, userDto);
      return await this.userRepository.save(userUpdated);
    } catch (er) {
      console.log('estoy manejando el error en el patch');
    }
  }

  async updateById(userId: number, userDto: UserDto): Promise<any> {
    try {
      const userToUpdate = await this.userRepository.findOne(userId);
     return await this.userRepository.update(userToUpdate, userDto);
    } catch (error) {
      console.log('estoy manejando el error');
      throw new repeatedUserException(error)
    }
  }

  async deleteById(userId: number): Promise<User> {
    const userToDelete = await this.userRepository.findOne(userId);
    return this.userRepository.remove(userToDelete);
  }
}
