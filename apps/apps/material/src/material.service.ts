import { Injectable } from '@nestjs/common';

@Injectable()
export class MaterialService {
  getHello(): string {
    return 'Hello World!';
  }
}
