/*
 * @Author: your name
 * @Date: 2020-02-28 16:23:01
 * @LastEditTime: 2020-03-02 16:18:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\admin\src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';
import { EpisodesController } from './episodes/episodes.controller';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from 'libs/common/src';

const multerCOS = require('multer-cos');

@Module({
  // 导入公共的数据库模块
  imports: [
    CommonModule,
    // 接入腾讯云cos实现文件上传,异步回调获取环境变量里的秘钥
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: multerCOS({
            cos: {
              SecretId: process.env.COS_SECRET_ID,
              SecretKey: process.env.COS_SECRET_KEY,
              Bucket: process.env.COS_BUCKET,
              Region: process.env.COS_REGION,
            },
            //自己会生成个随机16字母的文件名和后缀
            filename:'auto'
          }),
        }
      }
    }),
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AppController, CoursesController, EpisodesController],
  providers: [AppService],
})
export class AppModule {}
