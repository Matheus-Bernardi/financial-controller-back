import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DatesInput } from '../common/dto/dates-input.dto';
import { IdInput } from '../common/dto/id-input.dto';
import { MonthYearInput } from '../common/dto/monthYear-input.dto';
import { EntryInput } from './dto/entry-input.dto';
import { EntryResponse } from './dto/entry-response.dto';
import { EntryService } from './entry.service';

@Controller('/entries')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Get('/search')
  async getFilteredEntry(
    @Query() { startDate, finalDate }: DatesInput,
  ) {
    return await this.entryService.getFilteredEntry(startDate, finalDate);
  }

  @Get('/total-month')
  async getTotalMonth(
    @Query() { month, year }: MonthYearInput,
  ): Promise<{ total: number}> {
    return await this.entryService.getTotalMonth(month, year);
  }

  @Get()
  async getAllEntries(): Promise<EntryResponse[]> {
    return await this.entryService.getAllEntries();
  }

  @Get(':id')
  async getEntry(
    @Param() { id }: IdInput,
  ): Promise<EntryResponse> {
    return await this.entryService.getEntry(id); 
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
