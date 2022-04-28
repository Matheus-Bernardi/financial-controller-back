import { Module } from '@nestjs/common';
import { WalletController } from './wallet.controller';
import { WalletRepository } from './wallet.repository';
import { WalletService } from './wallet.service';

@Module({
  controllers: [WalletController],
  providers: [WalletService, WalletRepository],
})
export class WalletModule {}
