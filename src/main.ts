import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import env from './app.env';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(env.PORT);
}
bootstrap();
