import { Injectable } from '@nestjs/common';
import { EntryInput } from './dto/entry-input.dto';
import { EntryResponse } from './dto/entry-response.dto';
import { EntryRepository } from './entry.repository';

@Injectable()
export class EntryService {

  constructor(
    private entryRepository: EntryRepository,
  ) {}

  async getEntry(id: string): Promise<EntryResponse> {
    return await this.entryRepository.selectEntryFromId(id);
  }

  async getAllEntries(): Promise<EntryResponse[]> {
    return await this.entryRepository.selectAllEntries();
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
