import {
  Controller,
  Get,
  Query,
  VERSION_NEUTRAL,
  Version,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Appointment } from '@prisma/client';
import { GetAppointmentsQuery } from 'src/dtos/appointment.dto';
import { AppointmentService } from 'src/services';

@ApiTags('Appointments')
@Controller({ path: '/appointments', version: VERSION_NEUTRAL })
@Controller()
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get('/')
  @Version('1')
  getAppointments(
    @Query() query: GetAppointmentsQuery,
  ): Promise<Appointment[]> {
    // TODO:
    // This endpoint should be restricted probably to return appointments for currently logged in user (either buyer or vendor)
    // As we don't have authentication integrated yet, so I am supposing that the parameter will be passed into query for now.
    return this.appointmentService.getAppointments(query);
  }
}
