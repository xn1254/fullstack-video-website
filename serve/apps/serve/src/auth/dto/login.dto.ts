/*
* @Author: your name
* @Date: 2020-03-12 19:43:02
 * @LastEditTime: 2020-03-12 19:49:48
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \video-fullstack-web\serve\apps\serve\src\auth\dto\register.dto.ts
*/
import { ApiProperty } from "@nestjs/swagger"
export default class LoginDto {
    @ApiProperty({})
    username:  string
    @ApiProperty({})
    password: string
}