import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IdInput } from '../common/dto/id-input.dto';
import { CategoryInput } from './dto/category-input.dto';
import { CategoryResponse } from './dto/category-response.dto';
import { CategoryService } from './category.service';

@Controller('/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getAllCategories(): Promise<CategoryResponse[]> {
    return await this.categoryService.getAllCategories();
  }

  @Get(':id')
  async getCategory(
    @Param() { id }: IdInput,
  ): Promise<CategoryResponse> {
    return await this.categoryService.getCategory(id); 
  }

  @Post()
  async postCategory(@Body() category: CategoryInput) {
    return await this.categoryService.postCategory(category);
  }

  @Put(':id')
  async putCategory(
    @Param() { id }: IdInput,
    @Body() category: CategoryInput
  ) {
    return await this.categoryService.putCategory(id, category);
  }

  @Delete(':id')
  async deleteCategory(
    @Param() { id }: IdInput,
  ) {
    return await this.categoryService.deleteCategory(id);
  }
}
