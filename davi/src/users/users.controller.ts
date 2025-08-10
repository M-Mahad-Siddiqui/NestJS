import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/usersDTO';
import { UsersService } from './users.service';


@Controller('users') //    route   /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // create object of users service

  /*
    POST   /users/       - create a new user
    GET    /users/       - get all users (optionally filtered by role)
    GET    /users/:id    - get a user by id
    PATCH  /users/:id    - update a user
    DELETE /users/:id    - delete a user
    GET    /users/interns - get all interns
  */

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    // /users?role=INTERN
    return {
      msg: role
        ? `This action returns all users with role: ${role}`
        : 'This action returns all users',
      data: this.usersService.findAll(role),
    };
  }

  @Get('interns') // GET /users/interns
  findAllInterns() {
    return {
      msg: 'This action returns all interns',
      data: this.usersService.findAll('INTERN'),
    };
  }

  @Get(':id') // /users/123
  findOne(@Param('id') id: string) {
    const user = this.usersService.findOne(id);
    if (!user) {
      return {
        msg: `User with ID ${id} not found`,
      };
    }
    return {
      msg: `This action returns user with ID: ${id}`,
      data: user,
    };
  }

  @Post() //  /users
  create(@Body(ValidationPipe) user: CreateUserDto) {
    const newUser = this.usersService.create(user);
    return {
      msg: 'User created successfully',
      data: newUser,
    };
  }

  @Patch(':id') // /users/123
  update(@Param('id') id: string, @Body(ValidationPipe) updateData: UpdateUserDto) {
    const updated = this.usersService.update(id, updateData);
    if (!updated) {
      return {
        msg: `User with ID ${id} not found`,
      };
    }
    return {
      msg: `User with ID ${id} updated successfully`,
      data: updated,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // /users/123
    const success = this.usersService.delete(id);
    return {
      msg: success
        ? `User with ID ${id} deleted successfully`
        : `User with ID ${id} not found`,
    };
  }
}
