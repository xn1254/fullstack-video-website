/*
 * @Author: your name
 * @Date: 2020-03-12 18:25:18
 * @LastEditTime: 2020-03-12 20:53:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\auth\local.strategy.ts
 */
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, StrategyOptions, ExtractJwt } from 'passport-jwt';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@lib/db/models/user.model';
import { ReturnModelType } from '@typegoose/typegoose';

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor (
        @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET
        } as StrategyOptions)
    }

    async validate(id) {
        const user = await this.userModel.findById(id)
        return user
    }
}