/*
 * @Author: your name
 * @Date: 2020-02-28 16:17:34
 * @LastEditTime: 2020-03-03 20:22:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from '@app/common';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    CommonModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
