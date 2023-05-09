import { Injectable } from '@nestjs/common';
import { Buyer } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BuyerService {
  constructor(private readonly prismaService: PrismaService) {}

  async getBuyer(id: number): Promise<Buyer> {
    return this.prismaService.buyer.findUniqueOrThrow({
      where: { id },
    });
  }
}
