import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import { EntryInput } from './dto/entry-input.dto';
import { EntryResponse } from './dto/entry-response.dto';
import { EntryRepository } from './entry.repository';

@Injectable()
export class EntryService {

  constructor(
    private entryRepository: EntryRepository,
    private commonService: CommonService,
  ) {}

  async getEntry(id: string, userId: string): Promise<EntryResponse> {
    return await this.entryRepository.selectEntryFromId(id, userId);
  }

  async getAllEntries(userId: string): Promise<EntryResponse[]> {
    return await this.entryRepository.selectAllEntries(userId);
  }

  async getFilteredEntry(userId: string, startDate: string, finalDate: string): Promise<EntryResponse[]> {
    return await this.entryRepository.selectEntriesFromDate(userId, startDate, finalDate);
  }

  async getTotalMonth(userId: string, month: string, year: string): Promise<{ total: number }> {
    const { startDate, finalDate } = this.commonService.startFinalDateByMonthYear(month, year);
    const result = await this.entryRepository.selectEntriesFromDate(userId, startDate, finalDate);

    return {total: this.sumTotalFromEntries(result)};
  }

  sumTotalFromEntries(entries: EntryResponse[]): number {
    return entries.reduce((acumulate, currentValue) => acumulate + Number(currentValue.value), 0);
  }

  async postEntry(entry: EntryInput) {
    await this.entryRepository.insertEntry(entry);
  }

  async putEntry(id: string, entry: EntryInput) {
    await this.entryRepository.updateEntry(id, entry);
  }

  async deleteEntry(id: string) {
    await this.entryRepository.deleteEntry(id);
  }
}
