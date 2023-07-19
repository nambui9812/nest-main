import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('hello')
  hello() {
    return this.authService.getHello();
  }

  @Get('hello-from-ms')
  helloFromMS() {
    return this.authService.getHelloFromMS();
  }
}
