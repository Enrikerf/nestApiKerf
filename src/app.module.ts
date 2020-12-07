import "reflect-metadata";
import { UserModule } from './userModule/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection, getConnectionManager } from 'typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {
    console.log('main module loaded');
  }
}
