import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TiktokModule } from './tiktok/tiktok.module';
import { TimechainModule } from './timechain/timechain.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://10.39.80.23/tiktok'), UserModule, TiktokModule, TimechainModule], // 使用脚本创建 自动引入
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
