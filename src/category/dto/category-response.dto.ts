import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsUUID, MinLength } from '@nestjs/class-validator';
import { CategoryInput } from './category-input.dto';

@Exclude()
export class CategoryResponse extends CategoryInput {
  @Expose()
  @IsUUID('4')
  @MinLength(1)
  category_id: string;
}
