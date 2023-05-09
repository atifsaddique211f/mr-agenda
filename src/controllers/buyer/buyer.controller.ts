import { Controller, Get, Param, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Buyer } from '@prisma/client';
import { BuyerService } from 'src/services';

@ApiTags('Buyers')
@Controller({ path: '/buyers', version: VERSION_NEUTRAL })
export class BuyerController {
  constructor(private readonly buyerService: BuyerService) {}

  @Get('/:id')
  getBuyer(@Param('id') id: number): Promise<Buyer> {
    return this.buyerService.getBuyer(+id);
  }
}
