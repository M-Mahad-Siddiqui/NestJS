import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma'; // use "@prisma/client" if you've fixed the output path
import { DatabaseService } from '../database/database.service';

@Injectable()
export class StudentsService {
  constructor(private readonly db: DatabaseService) {}

  async create(createStudentDto: Prisma.StudentCreateInput) {
    return this.db.student.create({
      data: createStudentDto,
    });
  }

  async findAll(role?: 'INTERN' | 'STUDENT' | 'TEACHER' | 'ADMIN' | 'ALL') {
    if (role && role !== 'ALL') {
      return this.db.student.findMany({
        where: { role },
      });
    }
    return this.db.student.findMany();
  }

  async findOne(id: number) {
    return this.db.student.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateStudentDto: Prisma.StudentUpdateInput) {
    return this.db.student.update({
      where: { id },
      data: updateStudentDto,
    });
  }

  async remove(id: number) {
    return this.db.student.delete({
      where: { id },
    });
  }
}
