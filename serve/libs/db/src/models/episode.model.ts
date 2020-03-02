/*
 * @Author: your name
 * @Date: 2020-02-28 16:46:40
 * @LastEditTime: 2020-03-02 14:29:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\libs\db\src\models\user.model.ts
 */
import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Course } from './course.model'

// 添加数据的时间戳
@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})
export class Episode {
    @prop()
    @ApiProperty({description: '课时名称'})
    name: string

    @prop()
    @ApiProperty({description: '课时文件'})
    file: string

    @prop({ref: 'Course'})
    @ApiProperty({description: '所属课程'})
    course: Ref<Course>
}