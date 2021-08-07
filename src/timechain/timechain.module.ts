import { Module } from '@nestjs/common';
import { TimechainController } from './timechain.controller';
import { TimechainService } from './timechain.service';

@Module({
  controllers: [TimechainController],
  providers: [TimechainService]
})
export class TimechainModule {}
