import { Injectable } from '@nestjs/common';
import { WalletInput } from './dto/wallet-input.dto';
import { WalletResponse } from './dto/wallet-response.dto';
import { WalletRepository } from './wallet.repository';

@Injectable()
export class WalletService {

  constructor(
    private walletRepository: WalletRepository
  ) {}

  async getWallet(id: string): Promise<WalletResponse> {
    return await this.walletRepository.selectWalletFromId(id);
  }

  async getAllWallets(): Promise<WalletResponse[]> {
    return await this.walletRepository.selectAllWallets();
  }

  async postWallet(wallet: WalletInput) {
    await this.walletRepository.insertWallet(wallet);
  }

  async putWallet(id: string, wallet: WalletInput) {
    await this.walletRepository.updateWallet(id, wallet);
  }

  async deleteWallet(id: string) {
    await this.walletRepository.deleteWallet(id);
  }
}
