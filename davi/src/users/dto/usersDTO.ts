import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ADMIN', 'ENGINEER'], {
    message: 'Role must be one of the following: INTERN, ADMIN, ENGINEER',
  })
  role: 'INTERN' | 'ADMIN' | 'ENGINEER';
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
