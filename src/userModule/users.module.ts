import { User } from './../entity/User';
import { City } from './../entity/City';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { UsersMiddleware } from './users.middleware';
import { UsersController } from './users.controller';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService], //for services
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(UsersMiddleware).forRoutes('users');
  }
}
