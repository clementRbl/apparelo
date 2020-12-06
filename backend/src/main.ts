import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // if (process.env.NODE_ENV === 'development') {
  app.enableCors();
  // }
  console.log(process.env.API_PORT);
  await app.listen(process.env.API_PORT);
}
bootstrap();
