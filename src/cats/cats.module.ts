import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({})
export class CatsModule {
  controllers: [CatsController]
  providers: [CatsService]
}