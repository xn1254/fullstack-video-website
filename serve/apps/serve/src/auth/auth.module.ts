/*
 * @Author: your name
 * @Date: 2020-03-12 13:51:38
 * @LastEditTime: 2020-03-12 20:29:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\auth\auth.module.ts
 */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule
  ],
  controllers: [AuthController],
  providers: [
    LocalStrategy,
    JwtStrategy
  ]
})
export class AuthModule {}
