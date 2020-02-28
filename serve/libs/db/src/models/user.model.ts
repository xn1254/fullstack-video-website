/*
 * @Author: your name
 * @Date: 2020-02-28 16:46:40
 * @LastEditTime: 2020-02-28 18:25:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\libs\db\src\models\user.model.ts
 */
import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

// 添加数据的时间戳
@modelOptions({
    schemaOptions:{
        timestamps: true
    }
})
export class User {
    @prop()
    @ApiProperty({description: '用户名'})
    username: string

    @prop()
    @ApiProperty({description: '密码'})
    password: string
}