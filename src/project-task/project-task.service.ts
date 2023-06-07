import { Injectable } from '@nestjs/common';
import { CreateProjectTaskDto } from './dto/create-project-task.dto';
import { UpdateProjectTaskDto } from './dto/update-project-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { task } from './entities/project-task.entity';

@Injectable()
export class ProjectTaskService {
  constructor(@InjectModel('Task') private projectTaskModel : Model<task>) {}

  async create(createProjectTaskDto: CreateProjectTaskDto) {
    await new this.projectTaskModel(createProjectTaskDto).save();
    return this.projectTaskModel.find().exec()
  }

  async findAll() {
    return await this.projectTaskModel.find().exec()
  }

  async findOne(id: string) {
    return await this.projectTaskModel.find({project_id: id});
  }

  async update(updateProjectTaskDto: UpdateProjectTaskDto) {
    const task = await this.projectTaskModel.find({_id: updateProjectTaskDto.project_id});
    return task
  }

  remove(id: number) {
    return `This action removes a #${id} projectTask`;
  }
}
