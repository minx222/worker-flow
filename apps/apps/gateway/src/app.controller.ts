import { Controller, Get } from '@nestjs/common';

import { Result } from '@libs/common';

@Controller('/app')
export class AppController {

	@Get()
	getHello(): Result<string> {
		return Result.success('Hello World!');
	}
}
