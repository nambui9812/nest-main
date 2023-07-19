import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_MICROSERVICE') private readonly client: ClientProxy) {}

  getHello() {
    return 'Hello';
  }

  getHelloFromMS() {
    return this.client.send({ cmd: 'get-hello' }, 0);
  }
}
