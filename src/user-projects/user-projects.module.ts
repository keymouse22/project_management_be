import { Module } from '@nestjs/common';
import { UserProjectsService } from './user-projects.service';
import { UserProjectsController } from './user-projects.controller';
import { ProjectsSchema } from './entities/user-project.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name: 'Projects', schema: ProjectsSchema}])],
  controllers: [UserProjectsController],
  providers: [UserProjectsService]
})
export class UserProjectsModule {}
