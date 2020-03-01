/*
 * @Author: your name
 * @Date: 2020-02-28 20:24:10
 * @LastEditTime: 2020-03-01 19:34:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\admin\src\courses\courses.controller.ts
 */
import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Course } from '@lib/db/models/course.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Controller('courses')
@Crud({
    model: Course
})
@ApiTags('课程')
export class CoursesController {
    constructor (
        @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>
    ) {}

    @Get('option')
    option() {
        return {
            title: '课程管理',
            column: [
                { prop: 'name', label: '课程名称' },
                { prop: 'cover', label: '课程封面' },
            ],
        }
    }
}
