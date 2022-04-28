import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { IdInput } from '../common/dto/id-input.dto';
import { GetUserInput } from './dto/getUser-input.dto';
import { UserInput } from './dto/user-input.dto';
import { UserResponse } from './dto/user-response.dto';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser(
    @Query() param: GetUserInput,
  ): Promise<UserResponse> {
    return await this.userService.getUser(param); 
  }

  @Post()
  async postUser(@Body() user: UserInput) {
    return await this.userService.postUser(user);
  }

  @Put(':id')
  async putUser(
    @Param() { id }: IdInput,
    @Body() user: UserInput
  ) {
    return await this.userService.putUser(id, user);
  }

  @Delete(':id')
  async deleteUser(
    @Param() { id }: IdInput,
  ) {
    return await this.userService.deleteUser(id);
  }
}
