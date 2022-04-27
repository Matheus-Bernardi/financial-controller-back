import { Module } from '@nestjs/common';
import { EntryController } from './entry.controller';
import { EntryRepository } from './entry.repository';
import { EntryService } from './entry.service';

@Module({
  imports: [],
  controllers: [EntryController],
  providers: [EntryService, EntryRepository],
})
export class EntryModule {}
