import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsUUID, MinLength } from '@nestjs/class-validator';
import { UserInput } from './user-input.dto';

@Exclude()
export class UserResponse extends UserInput {
  @Expose()
  @IsUUID('4')
  @MinLength(1)
  user_id: string;
}
