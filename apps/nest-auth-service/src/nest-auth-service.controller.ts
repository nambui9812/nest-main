import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { NestAuthServiceService } from './nest-auth-service.service';

@Controller()
export class NestAuthServiceController {
  constructor(private readonly nestAuthServiceService: NestAuthServiceService) {}

  @Get()
  getHello(): string {
    return this.nestAuthServiceService.getHello();
  }

  @MessagePattern({ cmd: 'get-hello' })
  helloFromMS() {
    return this.nestAuthServiceService.getHelloFromMS();
  }
}
