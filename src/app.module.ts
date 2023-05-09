import { Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import {
  AppointmentController,
  BuyerController,
  VendorController,
} from './controllers';
import { AppointmentService, BuyerService, VendorService } from './services';

@Module({
  imports: [],
  controllers: [AppointmentController, VendorController, BuyerController],
  providers: [PrismaService, AppointmentService, VendorService, BuyerService],
})
export class AppModule {}
