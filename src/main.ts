import { City } from './entity/City';
import { async } from 'rxjs/internal/scheduler/async';
import { createConnection } from 'typeorm';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4500);
}
bootstrap();
