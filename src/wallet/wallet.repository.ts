import { Injectable } from '@nestjs/common';
import { WalletEntity } from './entities/wallet-data.entity';
import { InsertWalletEntity } from './entities/insert-wallet-data.entity';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class WalletRepository {

  private tableName = 'wallet';

  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}
  
  async selectWalletFromId(id: string): Promise<WalletEntity> {
    return await this.knex
      .select()
      .from<WalletEntity>(this.tableName)
      .where('wallet_id', id)
      .first();
  }

  async selectAllWallets(): Promise<WalletEntity[]> {
    return await this.knex
      .select()
      .from<WalletEntity>(this.tableName);
  }

  async insertWallet(wallet: InsertWalletEntity) {
    await this.knex.insert(wallet).into(this.tableName);
  }

  async updateWallet(id: string, wallet: InsertWalletEntity) {
    await this.knex
      .update(wallet)
      .into(this.tableName)
      .where('wallet_id', id);
  }

  async deleteWallet(id: string) {
    await this.knex
      .delete()
      .from(this.tableName)
      .where('wallet_id', id);
  }
}
