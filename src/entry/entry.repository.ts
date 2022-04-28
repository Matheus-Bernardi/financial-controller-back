import { Injectable } from '@nestjs/common';
import { EntryEntity } from './entities/entry-data.entity';
import { InsertEntryEntity } from './entities/insert-entry-data.entity';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class EntryRepository {

  private tableName = 'entry';
  private allJoins = [
    {
      table: 'wallet',
      column: 'wallet.wallet_id',
      joinColumn: `${this.tableName}.wallet_id`,
    },
    {
      table: 'category',
      column: 'category.category_id',
      joinColumn: `${this.tableName}.category_id`,
    }
  ];

  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}
  
  getWalletJoins() {
    return ['wallet', 'wallet.wallet_id', 'entry.wallet_id'];
  }

  getCategoryJoins() {
    return ['category', 'category.category_id', 'entry.category_id'];
  }

  async selectEntryFromId(id: string, userId: string): Promise<EntryEntity> {    
    return await this.knex
      .select()
      .from<EntryEntity>(this.tableName)
      .where('entry_id', id)
      .leftJoin(this.allJoins[0].table, this.allJoins[0].column, this.allJoins[0].joinColumn)
      .leftJoin(this.allJoins[1].table, this.allJoins[1].column, this.allJoins[1].joinColumn)
      .where('wallet.user_id', userId)
      .first();
  }

  async selectAllEntries(userId: string): Promise<EntryEntity[]> {
    return await this.knex
      .select()
      .from<EntryEntity>(this.tableName)
      .leftJoin(this.allJoins[0].table, this.allJoins[0].column, this.allJoins[0].joinColumn)
      .leftJoin(this.allJoins[1].table, this.allJoins[1].column, this.allJoins[1].joinColumn)
      .where('wallet.user_id', userId);
  }

  async selectEntriesFromDate(userId: string, startDate: string, finalDate: string): Promise<EntryEntity[]> {
    return await this.knex
      .select()
      .from<EntryEntity>(this.tableName)
      .whereBetween('received_date', [startDate, finalDate])
      .leftJoin(this.allJoins[0].table, this.allJoins[0].column, this.allJoins[0].joinColumn)
      .leftJoin(this.allJoins[1].table, this.allJoins[1].column, this.allJoins[1].joinColumn)
      .where('wallet.user_id', userId);
  }

  async selectTotalBetweenDates(userId: string, startDate: string, finalDate: string): Promise<object> {
    const result = await this.selectEntriesFromDate(userId, startDate, finalDate);
    
    return {total: result.reduce((acumulate, currentValue) => acumulate + Number(currentValue.value), 0)};
  }

  async insertEntry(entry: InsertEntryEntity) {
    await this.knex.insert(entry).into(this.tableName);
  }

  async updateEntry(id: string, entry: InsertEntryEntity) {
    await this.knex
      .update(entry)
      .into(this.tableName)
      .where('entry_id', id);
  }

  async deleteEntry(id: string) {
    await this.knex
      .delete()
      .from(this.tableName)
      .where('entry_id', id);
  }
}
