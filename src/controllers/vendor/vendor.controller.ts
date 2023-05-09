import { Controller, Get, Param, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Vendor } from '@prisma/client';
import { VendorService } from 'src/services';

@ApiTags('Vendors')
@Controller({ path: '/vendors', version: VERSION_NEUTRAL })
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Get('/:id')
  getVendor(@Param('id') id: number): Promise<Vendor> {
    //TODO: Add exception filter for handling and returning proper error response in case of not found.
    return this.vendorService.getVendor(+id);
  }
}
