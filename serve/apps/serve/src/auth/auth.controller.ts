/*
 * @Author: your name
 * @Date: 2020-03-12 13:53:53
 * @LastEditTime: 2020-03-12 20:55:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\auth\auth.controller.ts
 */
import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@lib/db/models/user.model';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';
import RegisterDto from './dto/register.dto';
import LoginDto from './dto/login.dto';
import { JwtService } from '@nestjs/jwt'
import { CurrentUser } from './current-user.decorator';

@Controller('auth')
@ApiTags('用户')
export class AuthController {
    constructor (
        private jwtService: JwtService,
        @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>
    ) {}

    @Post('register')
    @ApiOperation({ summary: '注册' })
    async register(@Body() dto: RegisterDto) {
        const {username, password} = dto
        const result = await this.userModel.findOne({
            username
        })
        if (result) {
            return {
                msg: '用户名已存在'
            }
        } else {
            const user = await this.userModel.create({
                username,
                password
            })
            return user
        }
    }

    @Post('login')
    // 使用passport-local策略进行登录验证
    @UseGuards(AuthGuard('local'))
    @ApiOperation({summary: '登录'})
    async login(@Body() dto: LoginDto, @CurrentUser() user: DocumentType<User>) {
        return {
            // 通过用户id生成唯一token
            token: this.jwtService.sign(String(user._id))
        }
    }

    @Get('user')
    // 设置该接口需要校验token
    @ApiBearerAuth()
    @ApiOperation({ summary: '获取个人信息' })
    @UseGuards(AuthGuard('jwt'))
    // 声明为typegoose的泛型类DocumentType的子类User
    async getUser(@CurrentUser() user: DocumentType<User>) {
        return user
    }
}
