import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IdInput } from '../common/dto/id-input.dto';
import { WalletInput } from './dto/wallet-input.dto';
import { WalletResponse } from './dto/wallet-response.dto';
import { WalletService } from './wallet.service';

@Controller('/wallets')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  async getAllWallets(): Promise<WalletResponse[]> {
    return await this.walletService.getAllWallets();
  }

  @Get(':id')
  async getWallet(
    @Param() { id }: IdInput,
  ): Promise<WalletResponse> {
    return await this.walletService.getWallet(id); 
  }

  @Post()
  async postWallet(@Body() wallet: WalletInput) {
    return await this.walletService.postWallet(wallet);
  }

  @Put(':id')
  async putWallet(
    @Param() { id }: IdInput,
    @Body() wallet: WalletInput
  ) {
    return await this.walletService.putWallet(id, wallet);
  }

  @Delete(':id')
  async deleteWallet(
    @Param() { id }: IdInput,
  ) {
    return await this.walletService.deleteWallet(id);
  }
}
