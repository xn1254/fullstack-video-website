/*
 * @Author: your name
 * @Date: 2020-02-28 16:23:01
 * @LastEditTime: 2020-07-12 18:01:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\serve\apps\admin\src\main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  // 选择基于NestExpressApplication的文件存储机制
  const app = await NestFactory.create(AppModule);

  // 允许跨域
  app.enableCors()

  // 自动生成swagger接口文档
  const options = new DocumentBuilder()
    .setTitle('fullsatck-video-web接口文档')
    .setDescription('供web端调用的接口文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const PORT = process.env.ADMIN_PORT || 3000
  await app.listen(PORT);
}
bootstrap();
