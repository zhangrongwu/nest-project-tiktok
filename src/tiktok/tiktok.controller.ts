import { Controller, Get, Post, Param, All, Body, Res } from '@nestjs/common';
import { TiktokService } from './tiktok.service';
import { Tiktok } from './tiktok.interface';
import { CreateTiktokDTO } from './tiktok.dto';
interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

@Controller('tiktok')
export class TiktokController {
  constructor(private readonly tiktokService: TiktokService) { }

  @Get('list')
  async getAllTiktok(): Promise<UserResponse<Tiktok[]>> {
    return {
      code: 200,
      data: await this.tiktokService.findAll(),
      message: 'Success.'
    };
  }
  @Post('add')
  async addTiktok(@Body() body: CreateTiktokDTO): Promise<UserResponse> {
    return {
      code: 200,
      data: await this.tiktokService.addTiktok(body),
      message: 'Success.'
    }
  }
  @Post('update')
  async updateTiktok(@Body() body: CreateTiktokDTO): Promise<UserResponse> {
    return {
      code: 200,
      data: await this.tiktokService.updateTiktok(body),
      message: 'Success.'
    }
  } 
  @Post('delete/:id')
  async deleteTiktok(@Param('id') id: string): Promise<UserResponse> {
    return {
      code: 200,
      data: await this.tiktokService.deleteTiktok(id),
      message: 'Success.'
    }
  }
  @Get('tiktok/:id')
  async getTiktok(@Param('id') id: string): Promise<UserResponse<Tiktok>> {
    console.log("---id", id)
    return {
      code: 200,
      data: await this.tiktokService.getTiktok(id),
      message: 'Success.'
    }
  }
}
