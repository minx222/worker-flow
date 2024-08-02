/*
 * 异常处理，ps：无法处理自定义请求处理，如果想要被拦截到，controller必须要return，使用原生req无法拦截异常
 * @Author: case.mo
 * @Description:
 */
import type { FastifyReply, FastifyRequest } from 'fastify';
import { type ExceptionFilter, Catch, type ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';

import { ServiceException } from '../exceptions';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();

		const response = ctx.getResponse<FastifyReply>();
		const request = ctx.getRequest<FastifyRequest>();
		const status = exception.getStatus();

		request.log.error(exception);

		// 处理业务异常
		if (exception instanceof ServiceException) {
			const error = exception.getResponse();
			response.status(HttpStatus.OK).send({
				data: null,
				status: typeof error === 'string' ? error :  Reflect.get(error, 'code'),
				extra: {},
				message: typeof error === 'string' ? error :  Reflect.get(error, 'code'),
				success: false,
			});
			return;
		}

		// 其它异常处理
		response.status(status).send({
			statusCode: status,
			timestamp: new Date().toISOString(),
			path: request.url,
			message: exception.getResponse(),
		});
	}
}
