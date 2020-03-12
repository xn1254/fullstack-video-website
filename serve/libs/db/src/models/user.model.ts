/*
 * @Author: your name
 * @Date: 2020-02-28 16:46:40
 * @LastEditTime: 2020-03-12 18:25:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\libs\db\src\models\user.model.ts
 */
import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { hashSync } from 'bcryptjs'

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

    @ApiProperty({description: '密码'})
    @prop({
        select: false,
        get (val) {
            return val
        },
        // 录入数据库之前进行数据散列
        set(val) {
            return val ? hashSync(val) : val
        }
    })
    password: string
}