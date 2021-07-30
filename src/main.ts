import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './validate.pipe';

import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());  // 校验
  app.useGlobalGuards(new AuthGuard) // 全局权限管道权限
  // app.useGlobalGuards(new RolesGuard) // 全局角色管道权限

  await app.listen(3000);
}
bootstrap();
