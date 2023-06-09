import { Module } from '@nestjs/common';
import { UserProjectsService } from './user-projects.service';
import { UserProjectsController } from './user-projects.controller';
import { ProjectsSchema } from './entities/user-project.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectTaskModule } from 'src/project-task/project-task.module';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Projects', schema: ProjectsSchema}]), ProjectTaskModule],
  controllers: [UserProjectsController],
  providers: [UserProjectsService]
})
export class UserProjectsModule {}
