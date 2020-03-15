/*
 * @Author: your name
 * @Date: 2020-03-15 13:41:07
 * @LastEditTime: 2020-03-15 14:12:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\collection\collection.controller.ts
 */
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Liked } from '@lib/db/models/liked.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('collection')
@ApiTags('收藏课程')
export class CollectionController {
    constructor(
        @InjectModel(Liked) private readonly model: ReturnModelType<typeof Liked>
    ) {}

    @Post('collect')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({summary: '收藏'})
    async collect(@Body() dto: Liked) {
        await this.model.create(dto)
        return {
            msg: '创建成功'
        }
    }

    @Post('cancelCollect')
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    @ApiOperation({summary: '取消收藏'})
    async cancelCollect(@Body() dto: Liked) {
        await this.model.findOneAndDelete(dto)
        return {
            msg: '删除成功'
        }
    }
}
