import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString, Max, Min, MinLength } from '@nestjs/class-validator';

@Exclude()
export class Entry {
  @Exclude()
  @IsString()
  @MinLength(1)
  id: string;

  @Expose()
  @IsString()
  @MinLength(1)
  description: string;

  @Expose()
  @IsNumber()
  @Min(0)
  @Max(1)
  type: number;

  @Expose()
  @IsString()
  @MinLength(1)
  category: string;

  @Expose()
  @IsString()
  @MinLength(1)
  wallet: string;

  @Expose()
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @Min(1)
  value: number

  @Expose()
  @IsBoolean()
  received: boolean = true;

  @Expose()
  @IsString()
  @MinLength(1)
  @IsOptional()
  receivedDate: string;

  @Expose()
  @IsNumber()
  @Min(1)
  @IsOptional()
  repeat: number;

  @Expose()
  @IsString()
  @IsOptional()
  note: string;

  @Expose()
  @IsBoolean()
  prevision: boolean = false;
}
