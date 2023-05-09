import { Test, TestingModule } from '@nestjs/testing';
import { BuyerController } from './buyer.controller';
import { BuyerService } from 'src/services';

// TODO: Fix tests
describe('BuyerController', () => {
  let appController: BuyerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BuyerController],
      providers: [BuyerService],
    }).compile();

    appController = app.get<BuyerController>(BuyerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
