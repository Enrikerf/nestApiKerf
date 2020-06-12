import { UserModule } from './userModule/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
