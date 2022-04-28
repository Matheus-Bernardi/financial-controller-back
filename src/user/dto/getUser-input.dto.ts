import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsEmail, IsOptional, IsString, IsUUID } from '@nestjs/class-validator';

@Exclude()
export class GetUserInput {
  @Expose()
  @IsEmail()
  @IsString()
  @IsOptional()
  email: string;

  @Expose()
  @IsUUID('4')
  @IsOptional()
  user_id: string;
}
