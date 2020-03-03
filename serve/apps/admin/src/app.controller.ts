/*
 * @Author: your name
 * @Date: 2020-02-28 16:23:01
 * @LastEditTime: 2020-03-03 15:56:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\admin\src\app.controller.ts
 */
import { Controller, Get, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 新增上传文件功能
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile('file') file) {
    return {
      url: 'http://' + file.url
    }
  }
}
