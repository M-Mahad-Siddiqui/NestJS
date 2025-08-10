// The AppModule is the root module of your NestJS app.
// Every NestJS application needs at least one module — the AppModule.
// It is annotated with the @Module() decorator, which is like the "configuration file" that tells NestJS:
// What controllers exist
// What services (providers) are available
// What other modules are imported
//main.ts bootstraps the app using AppModule:

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [UsersModule, DatabaseModule, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
