import { Controller, Get } from '@nestjs/common';
import { AppointmentService } from 'src/services';

@Controller()
export class AppointmentController {
  constructor(private readonly appService: AppointmentService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
