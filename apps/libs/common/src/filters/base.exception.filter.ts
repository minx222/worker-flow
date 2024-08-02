import type { FastifyReply, FastifyRequest } from 'fastify';
import { type ExceptionFilter, Catch, type ArgumentsHost, HttpStatus } from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
	catch(exception: Error, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<FastifyReply>();
		const request = ctx.getRequest<FastifyRequest>();

		// 非 HTTP 标准异常的处理。
		response.status(HttpStatus.SERVICE_UNAVAILABLE).send({
			code: HttpStatus.SERVICE_UNAVAILABLE,
			timestamp: new Date().toISOString(),
			path: request.url,
			message: exception.message,
		});
	}
}
