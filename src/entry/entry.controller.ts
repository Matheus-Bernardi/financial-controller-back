import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Entry } from './dto/entry.dto';
import { EntryService } from './entry.service';

@Controller('/entries')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Get(':id')
  getEntry(
    @Param('id') id: string,
  ): Entry {
    return this.entryService.getEntry(id); 
  }

  @Get()
  getAllEntries(): Array<Entry> {
    return this.entryService.getAllEntries();
  }

  @Post()
  postEntry(@Body() entry: Entry): Entry {
    return this.entryService.postEntry(entry);
  }

  @Put()
  putEntry(@Body() entry: Entry): Entry {
    return this.entryService.putEntry(entry);
  }

  @Delete(':id')
  deleteEntry(
    @Param('id') id: string
  ) {
    return this.entryService.deleteEntry(id);
  }
}
