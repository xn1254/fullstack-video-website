/*
 * @Author: your name
 * @Date: 2020-02-28 16:46:40
 * @LastEditTime: 2020-02-28 20:21:35
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
        timestamps: true
    }
})
export class Course {
    @prop()
    @ApiProperty({description: '课程名称'})
    name: string

    @prop()
    @ApiProperty({description: '课程封面'})
    cover: string

    // 定义数组类型的表字段
    @arrayProp({ itemsRef: 'Eposide' }) // 字符串Eposide避免循环引用的问题
    @ApiProperty({description: '课时'})
    episode: Ref<Episode>[]
}