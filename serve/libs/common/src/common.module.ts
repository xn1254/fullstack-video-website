/*
 * @Author: your name
 * @Date: 2020-03-02 15:38:29
 * @LastEditTime: 2020-03-12 20:15:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\libs\common\src\common.module.ts
 */
import { Module, Global } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config'
import { DbModule } from '@lib/db';
import { JwtModule } from '@nestjs/jwt'

// 标记为全局模块
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    // token不能直接存在代码中，应该放在环境变量里，所以应该使用registerAsync方法
    JwtModule.registerAsync({
      useFactory() {
        return {
          secret: process.env.SECRET
        }
      }
    }),
    DbModule
  ],
  providers: [CommonService],
  exports: [CommonService, JwtModule],
})
export class CommonModule {}
