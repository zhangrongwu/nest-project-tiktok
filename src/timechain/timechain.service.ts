import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TimeChain } from './timechain.interface';
import { CreateTimechainDTO } from './timechain.dto';
@Injectable()
export class TimechainService {
  constructor(@InjectModel('TimeChain') private readonly timechainModel: Model<TimeChain>) { }
  async findAll(): Promise<TimeChain[]> {
    const list = await this.timechainModel.find().exec();
    return list;
  }
  async addOne(createTimechainDTO: CreateTimechainDTO): Promise<TimeChain> {
    return await this.timechainModel.create(createTimechainDTO);
  }
  async getOne(id : string): Promise<TimeChain> {
    return await this.timechainModel.findById(id)

  }
}
