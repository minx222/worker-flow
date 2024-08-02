import * as httpProxy from 'http-proxy'
import type { IncomingMessage, ServerResponse } from 'node:http';
import { Inject, Injectable } from '@nestjs/common';
import { fromEvent, map } from 'rxjs';
import type { Observable } from 'rxjs'

@Injectable()
export class HttpService {

	  /**
   * 创建一个 RxJS 观察者来监听代理请求事件
   * @param event 事件源
   * @param event 事件名称
   * @param handler 处理函数
   * @returns 返回一个可观察对象
   */
	private createObservable<T>(
		proxy: httpProxy<IncomingMessage, ServerResponse<IncomingMessage>>, 
		event: string, 
		handler?: (event: T) => void
	): Observable<T> {
		return fromEvent(proxy, event).pipe(
			map((e: T) => {
				handler?.(e);
				return e;
			}),
		);
	}

	request<T>(request: httpProxy.ServerOptions, handler?: (event: T) => void) {
		const proxy = httpProxy.createProxyServer(request);
		return this.createObservable(proxy, 'proxyReq', handler);
	}
}
