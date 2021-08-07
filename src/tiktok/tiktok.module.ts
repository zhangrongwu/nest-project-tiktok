import { Module } from '@nestjs/common';
import { TiktokService } from './tiktok.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TiktokSchema } from './tiktok.schema';
import { TiktokController } from './tiktok.controller'
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tiktok', schema: TiktokSchema }])],
  controllers: [TiktokController],
  providers: [TiktokService],
})
export class TiktokModule {}
