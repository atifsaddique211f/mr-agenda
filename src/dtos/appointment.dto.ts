import { Optional } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export enum AppointmentType {
  Physical = 'physical',
  Virtual = 'virtual',
}

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

export class AppointmentDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ enum: AppointmentType, enumName: 'AppointmentType' })
  @IsIn(Object.values(AppointmentType))
  type!: AppointmentType;

  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  location: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  link: string;

  @ApiProperty({ type: Date })
  @IsDateString()
  startTime!: Date | string;

  @ApiProperty({ type: Date })
  @IsDateString()
  endTime!: Date | string;

  @ApiProperty()
  @IsInt()
  @IsDefined()
  @IsNotEmpty()
  buyerId: number;

  @ApiProperty()
  @IsInt()
  @IsDefined()
  @IsNotEmpty()
  vendorId: number;
}
