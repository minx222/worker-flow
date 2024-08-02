/*
 * @Author: Cookie
 * @Description:
 */
import { HttpException, HttpStatus } from '@nestjs/common';
import { BUSINESS_ERROR_CODE } from '../constants';

type ServiceExceptionError = {
	code: number;
	message: string;
};

export class ServiceException extends HttpException {
	constructor(err: ServiceExceptionError | string) {
		if (typeof err === 'string') {
			super({
				code: BUSINESS_ERROR_CODE.COMMON,
				message: err,
			}, HttpStatus.OK)
			return
		} 
		super(err, HttpStatus.OK);
	}

	static throwForbidden() {
		throw new ServiceException({
			code: BUSINESS_ERROR_CODE.ACCESS_FORBIDDEN,
			message: '抱歉哦，您无此权限！',
		});
	}

	static throwPermissionDisabled() {
		throw new ServiceException({
			code: BUSINESS_ERROR_CODE.PERMISSION_DISABLED,
			message: '权限已禁用',
		});
	}

	static throwUserDisabled() {
		throw new ServiceException({
			code: BUSINESS_ERROR_CODE.USER_DISABLED,
			message: '用户已冻结',
		});
	}

	static throwAppDisabled() {
		throw new ServiceException({
			code: BUSINESS_ERROR_CODE.APP_DISABLED,
			message: '应用不可用',
		});
	}
}
