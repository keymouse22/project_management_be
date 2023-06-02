import { Injectable } from '@nestjs/common';
import { CreateProjectTaskDto } from './dto/create-project-task.dto';
import { UpdateProjectTaskDto } from './dto/update-project-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { task } from './entities/project-task.entity';

@Injectable()
export class ProjectTaskService {
  constructor(@InjectModel('Task') private projectTaskModel : Model<task>) {}

  create(createProjectTaskDto: CreateProjectTaskDto) {
    return 'This action adds a new projectTask';
  }

  findAll() {
    return `This action returns all projectTask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectTask`;
  }

  update(id: number, updateProjectTaskDto: UpdateProjectTaskDto) {
    return `This action updates a #${id} projectTask`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectTask`;
  }
}
