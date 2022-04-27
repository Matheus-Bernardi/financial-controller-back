import { Injectable } from '@nestjs/common';
import { Entry } from './dto/entry.dto';

@Injectable()
export class EntryService {

  private entries = [
    {
      id: '1',
      description: 'Teste',
      type: 1,
      category: '1',
      wallet: '1',
      value: 1,
      received: true,
      receivedDate: '26/04/2022',
      repeat: 1,
      note: 'Teste',
      prevision: true,
    },
    {
      id: '2',
      description: 'Teste 2',
      type: 0,
      category: '1',
      wallet: '1',
      value: 1,
      received: true,
      receivedDate: '26/04/2022',
      repeat: 1,
      note: 'Teste',
      prevision: true,
    },
  ];

  getEntry(id: string): Entry {
    return this.entries.find(entry => entry.id === id);
  }

  getAllEntries(): Array<Entry> {
    return this.entries;
  }

  postEntry(entry: Entry): Entry {
    entry.id = String(this.entries.length + 1);
    this.entries.push(entry);
    return entry;
  }

  putEntry(entry: Entry): Entry {
    const index = this.entries.findIndex(entryElement => entry.id === entryElement.id);
    this.entries[index] = entry;
    return entry;
  }

  deleteEntry(id: string) {
    this.entries = this.entries.filter(entry => entry.id !== id);
  }
}
