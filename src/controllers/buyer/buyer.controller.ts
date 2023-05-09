import { Controller, Get } from '@nestjs/common';
import { BuyerService } from 'src/services';

@Controller()
export class BuyerController {
  constructor(private readonly appService: BuyerService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
