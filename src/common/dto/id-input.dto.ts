import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsUUID } from '@nestjs/class-validator';

@Exclude()
export class IdInput {
  @Expose()
  @IsUUID('4')
  id: string;
}
