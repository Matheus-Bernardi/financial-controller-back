import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsEmail, IsString, MinLength } from '@nestjs/class-validator';

@Exclude()
export class UserInput {
  @Expose()
  @IsEmail()
  @IsString()
  email: string;

  @Expose()
  @IsString()
  @MinLength(1)
  name: string;
}
