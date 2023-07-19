import { Injectable } from '@nestjs/common';

@Injectable()
export class NestAuthServiceService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloFromMS(): string {
    return 'Hello from Auth MicroService';
  }
}
