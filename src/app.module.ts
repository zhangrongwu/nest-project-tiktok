import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // imports: [CatsModule, UserModule], // 使用脚本创建 自动引入
  imports: [ MongooseModule.forRoot('mongodb://10.39.80.23/tiktok'), CatsModule, UserModule], // 使用脚本创建 自动引入
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
