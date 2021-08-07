import { Document } from 'mongoose';
 
export interface TimeChain extends Document {
  readonly email: string;
  readonly name: string;
  readonly create_time: string;
  readonly begin_time: string;
  readonly content: string;
  readonly message: string;
}