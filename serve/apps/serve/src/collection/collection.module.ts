/*
 * @Author: your name
 * @Date: 2020-03-15 13:41:22
 * @LastEditTime: 2020-03-15 14:18:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\serve\src\collection\collection.module.ts
 */
import { Module } from '@nestjs/common';
import { CollectionController } from './collection.controller';

@Module({
    controllers: [
        CollectionController
    ]
})
export class CollectionModule {}
