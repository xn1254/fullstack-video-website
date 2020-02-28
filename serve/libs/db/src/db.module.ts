/*
 * @Author: your name
 * @Date: 2020-02-28 16:29:46
 * @LastEditTime: 2020-02-28 20:35:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\libs\db\src\db.module.ts
 */
import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Episode } from './models/episode.model';

// 全局引用数据模型生成对应的数据表
const Models = TypegooseModule.forFeature([
  User,
  Course,
  Episode
])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/video-fullstack-web-db', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }),
    Models
  ],
  providers: [DbService],
  exports: [
    DbService,
    Models
  ],
})
export class DbModule {}
