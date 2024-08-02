import { Controller, Get } from '@nestjs/common';
import { MaterialService } from './material.service';

@Controller()
export class MaterialController {
  constructor(private readonly materialService: MaterialService) {}

  @Get()
  getHello(): string {
    return this.materialService.getHello();
  }
}
