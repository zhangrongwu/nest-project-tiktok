import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDTO, EditUserDTO } from './user.dto';
import { User } from './user.interface';
interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

// 每个控制器有多个路由，不同的路由可以执行不同的操作
@Controller('user')   
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Get('users')
  async findAll(): Promise<UserResponse<User[]>> {
    return {
      code: 200,
      data: await this.userService.findAll(),
      message: 'Success.'
    };
  }
 
  // GET /user/:_id
  @Get(':_id')
  async findOne(@Param('_id') _id: string): Promise<UserResponse<User>> {
    return {
      code: 200,
      data: await this.userService.findOne(_id),
      message: 'Success.'
    };
  }
 
  // POST /user/add
  @Post('add')
  async addOne(@Body() body: CreateUserDTO): Promise<UserResponse> {
    await this.userService.addOne(body);
    return {
      code: 200,
      message: 'Success.'
    };
  }
 
  // PUT /user/:_id
  @Put(':_id')
  async editOne(
    @Param('_id') _id: string,
    @Body() body: EditUserDTO
  ): Promise<UserResponse> {
    await this.userService.editOne(_id, body);
    return {
      code: 200,
      message: 'Success.'
    };
  }
 
  // DELETE /user/:_id
  @Delete(':_id')
  async deleteOne(@Param('_id') _id: string): Promise<UserResponse> {
    await this.userService.deleteOne(_id);
    return {
      code: 200,
      message: 'Success.'
    };
  }

  @Post('login')
  async login(@Body() info: any): Promise<UserResponse> {
    // 校验
    return {
      code: 200,
      data: info,
      message: 'Success.'
    };
  }
}
