import { Injectable } from '@nestjs/common';
import { AppointmentDto, GetAppointmentsQuery } from 'src/dtos/appointment.dto';
import { PrismaService } from '../prisma.service';
import { Appointment } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAppointments(query: GetAppointmentsQuery): Promise<Appointment[]> {
    const prismaQuery: GetAppointmentsQuery = query.buyerId
      ? { buyerId: +query.buyerId }
      : {};
    if (query.vendorId) {
      prismaQuery.vendorId = +query.vendorId;
    }

    return await this.prismaService.appointment.findMany({
      where: prismaQuery,
    });
  }

  async createAppointment(appointment: AppointmentDto): Promise<Appointment> {
    // TODO: Add the logic to check if the appointment doesn't have any conflict.
    return this.prismaService.appointment.create({
      data: appointment,
    });
  }
}
