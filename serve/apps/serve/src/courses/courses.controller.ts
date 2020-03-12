/*
 * @Author: your name
 * @Date: 2020-03-03 20:27:37
 * @LastEditTime: 2020-03-03 20:33:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\courses\courses.controller.ts
 */
import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Course } from '@lib/db/models/course.model';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
    model: Course,
    routes: {
        create: false,
        delete: false,
        update: false
    }
})
@Controller('courses')
@ApiTags('课程')
export class CoursesController {
    constructor (
        @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>
    ) {}
}
