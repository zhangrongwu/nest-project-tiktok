import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
@Module({})
export class DatabaseModule {
  controllers: [DatabaseController]
  providers: [DatabaseService]
}
