import { NestFactory } from '@nestjs/core';
import { UserInfoModule } from './user-info.module';

async function bootstrap() {
  const app = await NestFactory.create(UserInfoModule);
  await app.listen(3000);
}
bootstrap();
