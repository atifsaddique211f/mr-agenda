import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Vendor } from '@prisma/client';
import { VendorDto } from 'src/dtos/vendor.dto';

@Injectable()
export class VendorService {
  constructor(private readonly prismaService: PrismaService) {}

  async getVendor(id: number): Promise<Vendor> {
    return this.prismaService.vendor.findUniqueOrThrow({
      where: { id },
    });
  }

  async createVendor(vendor: VendorDto): Promise<Vendor> {
    return this.prismaService.vendor.create({
      data: vendor,
    });
  }
}
