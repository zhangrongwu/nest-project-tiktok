import { Document } from 'mongoose';
// 声明返回的数据类型
export interface Tiktok extends Document {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly icon: string;
  readonly description: string;
}