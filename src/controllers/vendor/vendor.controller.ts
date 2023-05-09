import { Controller, Get } from '@nestjs/common';
import { VendorService } from 'src/services';

@Controller()
export class VendorController {
  constructor(private readonly appService: VendorService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
