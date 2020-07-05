/*
 * @Author: your name
 * @Date: 2020-02-28 16:46:40
 * @LastEditTime: 2020-03-21 18:36:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\libs\db\src\models\user.model.ts
 */
import { prop, modelOptions, Ref } from '@typegoose/typegoose'
import { ApiProperty, ApiOperation } from '@nestjs/swagger'
import { User } from './user.model'
import { Course } from './course.model'
import { Episode } from './episode.model'

// 添加数据的时间戳
@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})
export class Action {
    @prop({ ref: 'User' })
    @ApiProperty({description: '用户ID'})
    user: Ref<User>

    @ApiProperty({description: '操作对象ID'})
    @prop({ enum: ['Course', 'Episode'] }) // 通过枚举限制操作对象
    type: string

    @prop({ refPath: 'type' }) // 基于type字段进行动态参考
    @ApiProperty({description: '操作表名称'})
    tableName: Ref<Course|Episode>

    @prop({ enum: ['LIKE', 'UPVOTE'] })
    @ApiProperty({description: '操作'})
    actionName: string

    @prop({ enum: [0, 1] })
    @ApiProperty({description: '是否取消'})
    cancel?: number
}