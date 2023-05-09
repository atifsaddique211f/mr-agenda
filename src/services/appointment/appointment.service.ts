import { Injectable } from '@nestjs/common';
import { GetAppointmentsQuery } from 'src/dtos/appointment.dto';
import { PrismaService } from '../prisma.service';
import { Appointment } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAppointments(query: GetAppointmentsQuery): Promise<Appointment[]> {
    const prismaQuery: GetAppointmentsQuery = query.buyerId
      ? { buyerId: query.buyerId }
      : {};
    if (query.vendorId) {
      prismaQuery.vendorId = query.vendorId;
    }

    return await this.prismaService.appointment.findMany({
      where: prismaQuery,
    });
  }
}
