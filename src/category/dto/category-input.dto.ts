import { Exclude, Expose } from '@nestjs/class-transformer';
import { IsString, MinLength } from '@nestjs/class-validator';

@Exclude()
export class CategoryInput {
  @Expose()
  @IsString()
  @MinLength(1)
  category_description: string;
}
