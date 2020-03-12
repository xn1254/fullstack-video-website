/*
 * @Author: your name
 * @Date: 2020-03-12 20:45:01
 * @LastEditTime: 2020-03-12 20:47:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\auth\current-user.decorator.ts
 */
// 自定义装饰器

import { createParamDecorator } from "@nestjs/common";

export const CurrentUser = createParamDecorator((data, req) => req.user)