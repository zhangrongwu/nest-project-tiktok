import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './validate.pipe';

import { AuthGuard } from './auth.guard';
import { RolesGuard } from './roles.guard';

// api文档插件
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());  // 校验
  app.useGlobalGuards(new AuthGuard) // 全局权限管道权限
  // app.useGlobalGuards(new RolesGuard) // 全局角色管道权限

  const config = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('系统接口文档')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(10241);
}
bootstrap();
