import { NestFactory } from '@nestjs/core';
import { MaterialModule } from './material.module';

async function bootstrap() {
  const app = await NestFactory.create(MaterialModule);
  await app.listen(3000);
}
bootstrap();
