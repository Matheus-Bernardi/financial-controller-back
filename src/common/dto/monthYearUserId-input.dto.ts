import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsString, IsUUID } from '@nestjs/class-validator';
import { Length } from 'class-validator';

@Exclude()
export class MonthYearUserIdInput {
  @Expose()
  @IsString()
  @Length(2, 2)
  month: string;

  @Expose()
  @IsString()
  @Length(4, 4)
  year: string;

  @Expose()
  @IsUUID('4')
  userId: string;
}
