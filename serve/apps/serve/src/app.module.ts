/*
 * @Author: your name
 * @Date: 2020-02-28 16:17:34
 * @LastEditTime: 2020-03-12 14:08:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@app/common';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    AuthModule,
    CommonModule,
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
