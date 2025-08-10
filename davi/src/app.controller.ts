import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //   This is Dependency Injection — instead of creating an instance of AppService manually, Nest injects it automatically into the controller's constructor.
  // It's like saying: "NestJS, please give me the instance of AppService you already created.
  // private: Makes appService only accessible inside this class.
  // readonly: Prevents modification after assignment.
  // appService: AppService: Tells Nest to inject an instance of AppService
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
