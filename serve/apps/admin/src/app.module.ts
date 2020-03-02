/*
 * @Author: your name
 * @Date: 2020-02-28 16:23:01
 * @LastEditTime: 2020-03-02 14:08:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\admin\src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@lib/db'
import { UsersModule } from './users/users.module';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';
import { EpisodesController } from './episodes/episodes.controller';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';

const multerCOS = require('multer-cos');

@Module({
  // 导入公共的数据库模块
  imports: [
    // 接入腾讯云cos实现文件上传
    MulterModule.register({
      storage: multerCOS({
        cos: {
          SecretId: 'AKIDITcbQ3jr11rX4doSgkeMn4C8433yDFi1',
          SecretKey: 'L1Xt8Z1E6ua70jHg0EJEOTb2MZbS9h4G',
          Bucket: 'node-vue-mobo-1257771288',
          Region: 'ap-guangzhou',
        },
        //自己会生成个随机16字母的文件名和后缀
        filename:'auto'
      }),
    }),
    DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AppController, CoursesController, EpisodesController],
  providers: [AppService],
})
export class AppModule {}
