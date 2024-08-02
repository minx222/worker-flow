import { Controller, Get } from '@nestjs/common';
import { UserInfoService } from './user-info.service';

@Controller()
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Get()
  getHello(): string {
    return this.userInfoService.getHello();
  }
}
