import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsString, IsUUID } from '@nestjs/class-validator';
import { Length } from 'class-validator';

@Exclude()
export class DatesUserIdInput {
  @Expose()
  @IsString()
  @Length(10, 10)
  startDate: string;

  @Expose()
  @IsString()
  @Length(10, 10)
  finalDate: string;
  
  @Expose()
  @IsUUID('4')
  userId: string;
}
