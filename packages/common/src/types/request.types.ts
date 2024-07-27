import type { RequestMethodEnum } from "@/enums";

interface Result {
	code: number;
	msg: string;
}

// * 请求响应参数(包含data)
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export interface ResultData<T = any> extends Result {
	data: T;
}

export interface CreateAxiosOptions {
  baseURL?: string;
  default_method?: RequestMethodEnum;
  timeout?: number;
  withCredentials?: true;
}
