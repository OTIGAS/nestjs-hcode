import { Controller, Post, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  setHello(): string {
    return 'Hello World!';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
