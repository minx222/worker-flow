import { Injectable } from '@nestjs/common';

@Injectable()
export class UserInfoService {
  getHello(): string {
    return 'Hello World!';
  }
}
