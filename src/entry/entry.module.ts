import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { EntryController } from './entry.controller';
import { EntryRepository } from './entry.repository';
import { EntryService } from './entry.service';

@Module({
  imports: [CommonModule],
  controllers: [EntryController],
  providers: [EntryService, EntryRepository],
})
export class EntryModule {}
