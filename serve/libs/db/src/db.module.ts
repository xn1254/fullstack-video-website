/*
 * @Author: your name
 * @Date: 2020-02-28 16:29:46
 * @LastEditTime: 2020-03-21 17:53:48
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
import { Action } from './models/action.model';

// 全局引用数据模型生成对应的数据表
const Models = TypegooseModule.forFeature([
  User,
  Course,
  Episode,
  Action
])

@Global()
@Module({
  imports: [
    // nest模块的导入是并行的，需要使用异步加载的方式才能读取到环境变量
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.DB.toString(),
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        }
      }
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
