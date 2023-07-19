import { Module } from '@nestjs/common';
import { NestAuthServiceController } from './nest-auth-service.controller';
import { NestAuthServiceService } from './nest-auth-service.service';

@Module({
  imports: [],
  controllers: [NestAuthServiceController],
  providers: [NestAuthServiceService],
})
export class NestAuthServiceModule {}
