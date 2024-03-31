import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cfg = app.get(ConfigService);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(cfg.get('PORT'));
}
bootstrap();
