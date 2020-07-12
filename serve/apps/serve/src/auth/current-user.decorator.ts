/*
 * @Author: your name
 * @Date: 2020-03-12 20:45:01
 * @LastEditTime: 2020-07-12 17:45:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\auth\current-user.decorator.ts
 */
// 自定义装饰器

import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
export const CurrentUser = createParamDecorator((data, ctx: ExecutionContext) => {
    const req: Request = ctx.switchToHttp().getRequest()
    return req.user
})