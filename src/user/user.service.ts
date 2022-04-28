import { Injectable } from '@nestjs/common';
import { GetUserInput } from './dto/getUser-input.dto';
import { UserInput } from './dto/user-input.dto';
import { UserResponse } from './dto/user-response.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {

  constructor(
    private userRepository: UserRepository
  ) {}

  async getUser(param: GetUserInput): Promise<UserResponse> {
    return await this.userRepository.selectUserFromParams(param);
  }

  async postUser(user: UserInput) {
    await this.userRepository.insertUser(user);
  }

  async putUser(id: string, user: UserInput) {
    await this.userRepository.updateUser(id, user);
  }

  async deleteUser(id: string) {
    await this.userRepository.deleteUser(id);
  }
}
