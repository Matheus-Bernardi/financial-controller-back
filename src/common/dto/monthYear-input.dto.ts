import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsString } from '@nestjs/class-validator';
import { Length } from 'class-validator';

@Exclude()
export class MonthYearInput {
  @Expose()
  @IsString()
  @Length(2, 2)
  month: string;

  @Expose()
  @IsString()
  @Length(4, 4)
  year: string;
}
