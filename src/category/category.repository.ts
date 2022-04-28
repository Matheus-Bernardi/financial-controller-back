import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './entities/category-data.entity';
import { InsertCategoryEntity } from './entities/insert-category-data.entity';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class CategoryRepository {

  private tableName = 'category';

  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}
  
  async selectCategoryFromId(id: string): Promise<CategoryEntity> {
    return await this.knex
      .select()
      .from<CategoryEntity>(this.tableName)
      .where('category_id', id)
      .first();
  }

  async selectAllCategories(): Promise<CategoryEntity[]> {
    return await this.knex
      .select()
      .from<CategoryEntity>(this.tableName);
  }

  async insertCategory(category: InsertCategoryEntity) {
    await this.knex.insert(category).into(this.tableName);
  }

  async updateCategory(id: string, category: InsertCategoryEntity) {
    await this.knex
      .update(category)
      .into(this.tableName)
      .where('category_id', id);
  }

  async deleteCategory(id: string) {
    await this.knex
      .delete()
      .from(this.tableName)
      .where('category_id', id);
  }
}
