import { Injectable } from '@nestjs/common';
import { CategoryInput } from './dto/category-input.dto';
import { CategoryResponse } from './dto/category-response.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {

  constructor(
    private categoryRepository: CategoryRepository
  ) {}

  async getCategory(id: string): Promise<CategoryResponse> {
    return await this.categoryRepository.selectCategoryFromId(id);
  }

  async getAllCategories(): Promise<CategoryResponse[]> {
    return await this.categoryRepository.selectAllCategories();
  }

  async postCategory(category: CategoryInput) {
    await this.categoryRepository.insertCategory(category);
  }

  async putCategory(id: string, category: CategoryInput) {
    await this.categoryRepository.updateCategory(id, category);
  }

  async deleteCategory(id: string) {
    await this.categoryRepository.deleteCategory(id);
  }
}
