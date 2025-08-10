import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { StudentsService } from './students.service';
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: Prisma.StudentCreateInput) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'STUDENT' | 'TEACHER' | 'ADMIN' | 'ALL') {
    return this.studentsService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: Prisma.StudentUpdateInput) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
