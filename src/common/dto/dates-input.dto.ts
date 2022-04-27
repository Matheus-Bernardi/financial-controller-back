import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsString } from '@nestjs/class-validator';
import { Length } from 'class-validator';

@Exclude()
export class DatesInput {
  @Expose()
  @IsString()
  @Length(10, 10)
  startDate: string;

  @Expose()
  @IsString()
  @Length(10, 10)
  finalDate: string;
}
