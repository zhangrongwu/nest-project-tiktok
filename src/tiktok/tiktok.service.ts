import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CreateTiktokDTO } from './tiktok.dto';
import { Tiktok } from './tiktok.interface';

@Injectable()
export class TiktokService {
  constructor(@InjectModel('Tiktok') private readonly tiktokModel: Model<Tiktok>) { }
  // 查询全部，返回 Tiktok类型的数组
  async findAll(): Promise<Tiktok[]> {
    const list = await this.tiktokModel.find().exec();
    return list;
  }
  // 保存 类型为 传入CreateTiktokDTO 的值，通过 tiktokModel保存
  async addTiktok(createTiktokDTO: CreateTiktokDTO): Promise<Tiktok> {
    // 写法1
    // const newTiktok = await new this.tiktokModel(createTiktokDTO);
    // return newTiktok.save();
    // 写法2
    return await this.tiktokModel.create(createTiktokDTO);
  }
  async updateTiktok(body: CreateTiktokDTO): Promise<any> {
    return await this.tiktokModel.findByIdAndUpdate(body.id, body);
  }
  // 删除id xxx
  async deleteTiktok(tiktokId): Promise<any> {
    return await this.tiktokModel.findByIdAndDelete(tiktokId)
  }
  // 查找id为xxx
  async getTiktok(tiktokId): Promise<Tiktok> {
    console.log("tiktokId: ", tiktokId)
    return await this.tiktokModel.findById(tiktokId)
  }
}
