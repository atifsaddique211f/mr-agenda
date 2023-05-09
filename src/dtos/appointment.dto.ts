import { Optional } from '@nestjs/common';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class GetAppointmentsQuery {
  @ApiPropertyOptional()
  @IsInt()
  @Optional()
  buyerId?: number;

  @ApiPropertyOptional()
  @IsInt()
  @Optional()
  vendorId?: number;
}
