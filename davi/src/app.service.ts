import { Injectable } from '@nestjs/common';

@Injectable() //The @Injectable() decorator marks a class as a provider that can be injected into other classes (like controllers or other services).
// It tells NestJS:
// "Hey, this class can be managed by the NestJS Dependency Injection system."
export class AppService {
  getHello(): string {
    return 'Hello Mahad Siddiqui!';
  }
}
