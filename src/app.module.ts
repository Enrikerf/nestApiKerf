import { UserModule } from './framework/controller/user/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
