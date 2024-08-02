import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import type { NestFastifyApplication } from '@nestjs/platform-fastify'

import { AppModule } from './app.module'


import { AllExceptionsFilter, HttpExceptionFilter } from '@libs/common';
import { ValidationPipe, VersioningType } from '@nestjs/common';

declare const module: { 
	hot: {
		accept: () => void,
		dispose: (fn: () => void) => void
	} 
};

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

	// 异常过滤器
	app.useGlobalFilters(new AllExceptionsFilter(), new HttpExceptionFilter());

	// 设置全局接口前缀
	app.setGlobalPrefix('api');

	// 接口版本化管理
	app.enableVersioning({
		type: VersioningType.URI,
	});
	// 启动全局字段校验，保证请求接口字段校验正确。
	app.useGlobalPipes(new ValidationPipe());

	// 添加热更新
	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}	
  await app.listen(3000);
}
bootstrap();
