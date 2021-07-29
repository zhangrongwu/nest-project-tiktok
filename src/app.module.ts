import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CatsModule } from './cats/cats.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, CatsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
