import { Module } from '@nestjs/common';
import { ProjectTaskService } from './project-task.service';
import { ProjectTaskController } from './project-task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './entities/project-task.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Task', schema: TaskSchema}])],
  controllers: [ProjectTaskController],
  providers: [ProjectTaskService],
  exports: [ProjectTaskService]
})
export class ProjectTaskModule {}
