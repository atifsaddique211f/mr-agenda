import { Injectable } from '@nestjs/common';
import { Buyer } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { BuyerDto } from 'src/dtos/buyer.dto';

@Injectable()
export class BuyerService {
  constructor(private readonly prismaService: PrismaService) {}

  async getBuyer(id: number): Promise<Buyer> {
    return this.prismaService.buyer.findUniqueOrThrow({
      where: { id },
    });
  }

  async createBuyer(buyer: BuyerDto): Promise<Buyer> {
    return this.prismaService.buyer.create({
      data: buyer,
    });
  }
}
