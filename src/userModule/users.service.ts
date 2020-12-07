import { dataBaseException } from './exceptions/dataBase.exception';
import { User } from './../entity/User';
import { Repository } from 'typeorm';
import { UserDto } from './models/user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new dataBaseException(error);
    }
  }

  async findById(userId: number): Promise<User> {
    try {
      const user = await this.userRepository.findOne(userId);
      if (!user) {
        throw new NotFoundException(userId);
      }
      return user;
    } catch (error) {
      throw new dataBaseException(error);
    }
  }

  async create(userDto: UserDto): Promise<any> {
    try {
      return await this.userRepository.insert(userDto);
    } catch (error) {
      throw new dataBaseException(error);
    }
  }

  async modifyById(userId: number, userDto: UserDto): Promise<User> {
    try {
      const user2Modify = await this.findById(userId);
      const userModified = await this.userRepository.merge(
        user2Modify,
        userDto,
      );
      return await this.userRepository.save(userModified);
    } catch (error) {
      throw new dataBaseException(error);
    }
  }

  async updateById(userId: number, userDto: UserDto): Promise<any> {
    try {
      const userToUpdate = await this.userRepository.findOne(userId);
      return await this.userRepository.update(userToUpdate, userDto);
    } catch (error) {
      throw new dataBaseException(error);
    }
  }

  async deleteById(userId: number): Promise<User> {
    try {
      const userToDelete = await this.userRepository.findOne(userId);
      return await this.userRepository.remove(userToDelete);
    } catch (error) {
      throw new dataBaseException(error);
    }
  }
}
