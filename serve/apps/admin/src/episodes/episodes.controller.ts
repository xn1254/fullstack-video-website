/*
 * @Author: your name
 * @Date: 2020-02-28 20:39:20
 * @LastEditTime: 2020-03-01 19:57:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\admin\src\episodes\episodes.controller.ts
 */
import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Episode } from '@lib/db/models/episode.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Controller('episodes')
@Crud({
    model: Episode
})
@ApiTags('课时')
export class EpisodesController {
    constructor (
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>
    ) {}

    @Get('option')
    option() {
        return {
            title: '课时管理',
            column: [
                { prop: 'name', label: '课时名称' },
            ],
        }
    }
}
