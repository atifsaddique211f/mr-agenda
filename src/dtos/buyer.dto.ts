import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class BuyerDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  companyName: string;
}
