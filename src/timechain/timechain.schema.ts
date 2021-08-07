import * as mongoose from 'mongoose';
//  声明数据库的数据类型
export const TimechainSchema = new mongoose.Schema({
   email: String,
   name: String,
   create_time: String,
   begin_time: String,
   content: String,
   message: String,
})