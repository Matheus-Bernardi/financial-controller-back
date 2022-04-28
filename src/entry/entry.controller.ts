import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { IdInput } from '../common/dto/id-input.dto';
import { EntryInput } from './dto/entry-input.dto';
import { EntryResponse } from './dto/entry-response.dto';
import { EntryService } from './entry.service';
import { MonthYearUserIdInput } from '../common/dto/monthYearUserId-input.dto';
import { UserIdInput } from '../common/dto/userId-input.dto copy';
import { DatesInput } from '../common/dto/dates-input.dto';

@Controller('/entries')
export class EntryController {
  constructor(private readonly entryService: EntryService) {}

  @Get('/search')
  async getFilteredEntry(
    @Query() { startDate, finalDate }: DatesInput,
    @Query() { userId }: UserIdInput
  ) {
    return await this.entryService.getFilteredEntry(userId, startDate, finalDate);
  }

  @Get('/total-month')
  async getTotalMonth(
    @Query() { month, year }: MonthYearUserIdInput,
    @Query() { userId }: UserIdInput
  ): Promise<{ total: number}> {
    return await this.entryService.getTotalMonth(userId, month, year);
  }

  @Get()
  async getAllEntries(
    @Query() { userId }: UserIdInput,
  ): Promise<EntryResponse[]> {
    return await this.entryService.getAllEntries(userId);
  }

  @Get(':id')
  async getEntry(
    @Param() { id }: IdInput,
    @Query() { userId }: UserIdInput,
  ): Promise<EntryResponse> {
    return await this.entryService.getEntry(id, userId); 
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
