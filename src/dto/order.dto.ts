import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class OrderDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsOptional()
  @IsArray()
  products: string[];

  @IsBoolean()
  @IsNotEmpty()
  usedDiscountCode: boolean;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsNotEmpty({})
  @IsDateString()
  orderDate: string;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}
