/*
 * @Author: your name
 * @Date: 2020-02-28 16:46:40
 * @LastEditTime: 2020-03-03 15:14:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\libs\db\src\models\user.model.ts
 */
import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Episode } from './episode.model'

// 添加数据的时间戳
@modelOptions({
    schemaOptions:{
        timestamps: true,
        toJSON: {
            virtuals: true
        }
    }
})
export class Course {
    @prop()
    @ApiProperty({description: '课程名称'})
    name: string

    @prop()
    @ApiProperty({description: '课程封面'})
    cover: string

    // 定义一个数组类型虚拟字段
    @arrayProp({
        // 关联Episode模型
        ref: 'Episode',
        // 本地键,通过_id来关联Episode
        localField: '_id',
        // 外键
        foreignField: 'course'
    })
    @ApiProperty({description: '课时列表'})
    episode: Ref<Episode>[]
}