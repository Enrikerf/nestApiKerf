import { UsersMiddleware } from './users.middleware';
import { UsersController } from './users.controller';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import * as cors from 'cors';

const routes ={
    ALL:{
        path: '*',
        method: RequestMethod.ALL
    }
}
@Module({
  imports: [],
  controllers: [ UsersController],
  providers: [],//for services
})
 
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer): void {

        consumer
        .apply(cors()).forRoutes(routes.ALL)
        .apply(UsersMiddleware).forRoutes('users');
      }
}
