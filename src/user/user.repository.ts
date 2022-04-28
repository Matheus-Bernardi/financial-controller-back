import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user-data.entity';
import { InsertUserEntity } from './entities/insert-user-data.entity';
import { InjectKnex, Knex } from 'nestjs-knex';
import { GetUserInput } from './dto/getUser-input.dto';

@Injectable()
export class UserRepository {

  private tableName = 'user_account';

  constructor(
    @InjectKnex() private readonly knex: Knex,
  ) {}
  
  async selectUserFromParams(param: GetUserInput): Promise<UserEntity> {
    return await this.knex
      .select()
      .from<UserEntity>(this.tableName)
      .where(param.user_id ? 'user_id' : 'email', param.user_id || param.email)
      .first();
  }

  async insertUser(user: InsertUserEntity) {
    await this.knex.insert(user).into(this.tableName);
  }

  async updateUser(id: string, user: InsertUserEntity) {
    await this.knex
      .update(user)
      .into(this.tableName)
      .where('user_id', id);
  }

  async deleteUser(id: string) {
    await this.knex
      .delete()
      .from(this.tableName)
      .where('user_id', id);
  }
}
