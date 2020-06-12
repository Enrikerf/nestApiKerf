
import { UsersService } from './users.service';
import { UsersMiddleware } from './users.middleware';
import { UsersController } from './users.controller';
import {
  Module,
  NestModule,
  MiddlewareConsumer,
} from '@nestjs/common';


@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService], //for services
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(UsersMiddleware)
      .forRoutes('users');
  }
}
