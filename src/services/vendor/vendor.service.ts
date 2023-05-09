import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Vendor } from '@prisma/client';

@Injectable()
export class VendorService {
  constructor(private readonly prismaService: PrismaService) {}

  async getVendor(id: number): Promise<Vendor> {
    return this.prismaService.vendor.findUniqueOrThrow({
      where: { id },
    });
  }
}
