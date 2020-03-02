/*
 * @Author: your name
 * @Date: 2020-03-02 15:38:29
 * @LastEditTime: 2020-03-02 15:43:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\libs\common\src\common.module.ts
 */
import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config'
import { DbModule } from '@lib/db';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DbModule
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
