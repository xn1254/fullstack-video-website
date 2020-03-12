/*
 * @Author: your name
 * @Date: 2020-03-12 18:25:18
 * @LastEditTime: 2020-03-12 20:00:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\auth\local.strategy.ts
 */
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, IStrategyOptions } from 'passport-local';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@lib/db/models/user.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { BadRequestException } from '@nestjs/common';
import { compareSync } from 'bcryptjs';

export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
    constructor (
        @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
    ) {
        super({
            usernameField: 'username',
            passwordField: 'password'
        } as IStrategyOptions)
    }

    async validate(username: string, password: string) {
        const user = await this.userModel.findOne({
            username
        }).select('+password')
        if (!user) {
            throw new BadRequestException('用户名不正确')
        }
        // 使用客户端明文密码和数据库加密密码进行比对
        if(!compareSync(password, user.password)) {
            throw new BadRequestException('密码不正确')
        }
        return user
    }
}