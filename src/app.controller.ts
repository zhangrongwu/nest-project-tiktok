import { Controller, Get, Post, HttpCode, Header, Param, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Get(':id')
  // @HttpCode(204)
  findAll(@Param() params): string {
    return 'This route uses a wildcard';
  }
  // get请求1
  @Get('findAll1')
  findAll1(@Query() query: any) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }
  // 获取视频流
  @Post('getmetadata')
  @Header('Cache-Control', 'none')
  getMetadata(@Body() info: any): any {
    return this.appService.getMetadata(info.url);
  }
}
