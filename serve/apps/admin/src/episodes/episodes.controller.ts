/*
 * @Author: your name
 * @Date: 2020-02-28 20:39:20
 * @LastEditTime: 2020-03-02 14:52:21
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
import { Course } from '@lib/db/models/course.model';

@Controller('episodes')
@Crud({
    model: Episode
})
@ApiTags('课时')
export class EpisodesController {
    constructor (
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>,
        @InjectModel(Course) private readonly courseModel: ReturnModelType<typeof Course>
    ) {}

    @Get('option')
    async option() {
        const courses = (await this.courseModel.find()).map(v => ({
            label: v.name,
            value: v._id,
        }))
        return {
            title: '课时管理',
            // 删除Avue默认提交的$name数据，$开头的字段在nest属于关键字
            translate: false,
            column: [
                { prop: 'course', label: '所属课程', type: 'select', dicData: courses, row: true },
                { prop: 'name', label: '课时名称', row: true },
                { prop: 'file', label: '上传视频', type: 'upload', row: true, action: 'upload' }
            ],
        }
    }
}
