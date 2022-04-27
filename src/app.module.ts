import { Module } from '@nestjs/common';
import { EntryModule } from './entry/entry.module';
import { PrevisionModule } from './prevision/prevision.module';

@Module({
  imports: [
    EntryModule,
    PrevisionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
