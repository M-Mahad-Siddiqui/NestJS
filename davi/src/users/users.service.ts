import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/usersDTO';

export type UserRole = 'ADMIN' | 'ENGINEER' | 'INTERN';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

@Injectable() // this services can be manage by nestjs
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'ADMIN',
    },
    {
      id: '2',
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: 'ENGINEER',
    },
    {
      id: '3',
      name: 'Charlie Lee',
      email: 'charlie.lee@example.com',
      role: 'INTERN',
    },
    {
      id: '4',
      name: 'Diana Cruz',
      email: 'diana.cruz@example.com',
      role: 'ENGINEER',
    },
    {
      id: '5',
      name: 'Ethan Brown',
      email: 'ethan.brown@example.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: UserRole): User[] {
    if (role) {
      const users = this.users.filter((user) => user.role === role);
      if (users.length === 0) {
        throw new NotFoundException(`No users found with role: ${role}`);
      }
      return users;
    }
    return this.users;
  }

  findOne(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`User with id ${id} not found`);
    return user;
  }

  // create(user: Omit<User, 'id'>): User {
  create(createUserDto: CreateUserDto): User {
    const highestId = Math.max(...this.users.map((u) => parseInt(u.id, 10)));
    const newUser: User = {
      id: (highestId + 1).toString(),
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, updateUserDto: UpdateUserDto): User | undefined {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return undefined;

    const existingUser = this.users[index];
    const user: User = {
      ...existingUser,
      ...updateUserDto,
    };

    this.users[index] = user;
    return user;
  }

  delete(id: string): boolean {
    //     const removedUser = this.users.find((user) => user.id === id);
    //     if (!removedUser) return false;

    const user = this.findOne(id);
    if (!user) return false;

    this.users = this.users.filter((u) => u.id !== id);
    return true;
  }
}
