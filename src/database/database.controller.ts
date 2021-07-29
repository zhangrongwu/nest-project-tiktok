import { Controller, Get, Post, HttpCode, Header, Param, Body, Query } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller()
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post()
  getHello(): string {
    return this.databaseService.getHello();
  }
}
