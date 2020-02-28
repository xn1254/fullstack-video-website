/*
 * @Author: your name
 * @Date: 2020-02-28 20:39:20
 * @LastEditTime: 2020-02-28 20:43:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\admin\src\episodes\episodes.controller.ts
 */
import { Controller } from '@nestjs/common';
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
}
