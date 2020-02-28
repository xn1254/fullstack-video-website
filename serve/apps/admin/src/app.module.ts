/*
 * @Author: your name
 * @Date: 2020-02-28 16:23:01
 * @LastEditTime: 2020-02-28 16:45:24
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

@Module({
  // 导入公共的数据库模块
  imports: [
    DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule
  ],
  controllers: [AppController, CoursesController, EpisodesController],
  providers: [AppService],
})
export class AppModule {}
