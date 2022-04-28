import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsUUID, MinLength } from '@nestjs/class-validator';
import { WalletInput } from './wallet-input.dto';

@Exclude()
export class WalletResponse extends WalletInput {
  @Expose()
  @IsUUID('4')
  @MinLength(1)
  wallet_id: string;
}
