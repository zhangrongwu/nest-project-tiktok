import * as mongoose from 'mongoose';
//  声明数据库的数据类型
export const TiktokSchema = new mongoose.Schema({
    id: String,
    title: String,
    url: String,
    description: String,
    icon: String,
})