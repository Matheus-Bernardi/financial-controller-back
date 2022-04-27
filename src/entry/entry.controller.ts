import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { IdInput } from 'src/common/dto/id-input.dto';
import { EntryInput } from './dto/entry-input.dto';
import { EntryResponse } from './dto/entry-response.dto';
import { EntryService } from './entry.service';

@Controller('/entries')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Get(':id')
  async getEntry(
    @Param() { id }: IdInput,
  ): Promise<EntryResponse> {
    return await this.entryService.getEntry(id); 
  }

  @Get()
  async getFilteredEntry(
    @Query() { date },
  ) {
    console.log(date);
    return date;
  }

  @Get()
  async getAllEntries(): Promise<EntryResponse[]> {
    return await this.entryService.getAllEntries();
  }

  @Post()
  async postEntry(@Body() entry: EntryInput) {
    return await this.entryService.postEntry(entry);
  }

  @Put(':id')
  async putEntry(
    @Param() { id }: IdInput,
    @Body() entry: EntryInput
  ) {
    return await this.entryService.putEntry(id, entry);
  }

  @Delete(':id')
  async deleteEntry(
    @Param() { id }: IdInput,
  ) {
    return await this.entryService.deleteEntry(id);
  }
}
