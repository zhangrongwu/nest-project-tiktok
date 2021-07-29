import { Controller, Get, Post, HttpCode, Header, Param, Body, Query } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  getHello(): string {
    return this.catsService.getHello();
  }
}
