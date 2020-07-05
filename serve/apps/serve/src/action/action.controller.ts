/*
 * @Author: your name
 * @Date: 2020-03-21 18:01:44
 * @LastEditTime: 2020-03-21 19:15:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\action\action.controller.ts
 */
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Action } from '@lib/db/models/action.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('action')
@ApiTags('操作')
export class ActionController {
    constructor (
        @InjectModel(Action) private readonly module: ReturnModelType<typeof Action>
    ) {}

    @Post('operate')
    @ApiOperation({summary: '操作'})
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async operate(@Body() dto: Action) {
        // await this.module.create(dto)
        // return {
        //     msg: '创建成功'
        // }
    }
}
