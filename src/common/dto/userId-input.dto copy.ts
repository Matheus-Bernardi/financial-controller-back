import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsUUID } from '@nestjs/class-validator';

@Exclude()
export class UserIdInput {
  @Expose()
  @IsUUID('4')
  userId: string;
}
