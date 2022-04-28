import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsNumber, IsString, IsUUID, MinLength } from '@nestjs/class-validator';

@Exclude()
export class WalletInput {
  @Expose()
  @IsString()
  @MinLength(1)
  wallet_description: string;

  @Expose()
  @IsNumber()
  total: number;

  @Expose()
  @IsUUID('4')
  @MinLength(1)
  user_id: string;
}
