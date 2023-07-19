import { Test, TestingModule } from '@nestjs/testing';
import { NestAuthServiceController } from './nest-auth-service.controller';
import { NestAuthServiceService } from './nest-auth-service.service';

describe('NestAuthServiceController', () => {
  let nestAuthServiceController: NestAuthServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestAuthServiceController],
      providers: [NestAuthServiceService],
    }).compile();

    nestAuthServiceController = app.get<NestAuthServiceController>(NestAuthServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestAuthServiceController.getHello()).toBe('Hello World!');
    });
  });
});
