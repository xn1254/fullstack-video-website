/*
 * @Author: your name
 * @Date: 2020-02-28 17:02:45
 * @LastEditTime: 2020-02-28 20:31:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\admin\src\users\users.controller.ts
 */
import { Controller, Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
// 依赖注入模型只需要关心表结构，框架自动根据类结构生成对应的表
import { User } from '@lib/db/models/user.model';
import { Crud } from 'nestjs-mongoose-crud'
import  { ApiTags } from '@nestjs/swagger'
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('users')
@Injectable()
// 引用第三方通用的增删改查装饰器
@Crud({
    model: User
})
@ApiTags('用户')
export class UsersController {
    constructor (
        // 通过依赖注入将数据模型注入到model这个变量上
        @InjectModel(User) private readonly model: ReturnModelType<typeof User>
    ) {}
}
