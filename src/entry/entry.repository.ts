import { Injectable } from '@nestjs/common';
import { EntryEntity } from './entities/entry-data.entity';
import { InsertEntryEntity } from './entities/insert-entry-data.entity';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class EntryRepository {

  private tableName = 'entry';

  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}
  
  async selectEntryFromId(id: string): Promise<EntryEntity> {
    return await this.knex.select().from<EntryEntity>(this.tableName).where('entry_id', id).first();
  }

  async selectAllEntries(): Promise<EntryEntity[]> {
    return await this.knex.select().from<EntryEntity>(this.tableName);
  }

  async insertEntry(entry: InsertEntryEntity) {
    await this.knex.insert(entry).into(this.tableName);
  }

  async updateEntry(id: string, entry: InsertEntryEntity) {
    await this.knex.update(entry).into(this.tableName).where('entry_id', id);
  }

  async deleteEntry(id: string) {
    await this.knex.delete().from(this.tableName).where('entry_id', id);
  }
}
