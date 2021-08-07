import { TimechainService } from './timechain.service';
import { TimeChain } from './timechain.interface';
import { CreateTimechainDTO } from './timechain.dto';
import { Controller, Get, Post, Param, Body, Res } from '@nestjs/common';

interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('timechain')
export class TimechainController {
  constructor(private readonly timechainService: TimechainService) { }
  @Post('add')
  async addOne(@Body() body: CreateTimechainDTO): Promise<UserResponse> {
    
    return {
      code: 200,
      data: await this.timechainService.addOne(body),
      message: 'Success.'
    };
  }
  @Get('list')
  async fetchList(): Promise<UserResponse<TimeChain[]>> {
    return {
      code: 200,
      data: await this.timechainService.findAll(),
      message: 'Success.'
    };
  }
  @Get('one/:id')
  async getOne(@Param('id') id: string): Promise<UserResponse<TimeChain>> {
    return {
      code: 200,
      data: await this.timechainService.getOne(id),
      message: 'Success.'
    }
  }
}
