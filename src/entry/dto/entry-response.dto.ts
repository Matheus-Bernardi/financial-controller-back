import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsUUID, MinLength } from '@nestjs/class-validator';
import { EntryInput } from './entry-input.dto';

@Exclude()
export class EntryResponse extends EntryInput {
  @Expose()
  @IsUUID('4')
  @MinLength(1)
  entry_id: string;
}
