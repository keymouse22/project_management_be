import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.projectTaskModel.find({project_id: createProjectTaskDto.project_id});
  }

  async findAll() {
    return await this.projectTaskModel.find().exec()
  }

  async findOne(id: string) {
    return await this.projectTaskModel.find({project_id: id});
  }

  async update(createProjectTaskDto: CreateProjectTaskDto) {
    const response = await this.projectTaskModel.updateOne({_id: createProjectTaskDto._id}, {$set: {board_name: createProjectTaskDto?.board_name, title: createProjectTaskDto?.title, description: createProjectTaskDto?.description, hours: createProjectTaskDto?.hours, comments: createProjectTaskDto?.comments}}
    )
    return this.projectTaskModel.find({project_id: createProjectTaskDto.project_id});
  }

  async remove(id: string) {
    const project = await this.projectTaskModel.find({_id: id});
    const projectId = project[0].project_id;
    await this.projectTaskModel.deleteOne({"_id": id});
    return await this.projectTaskModel.find({project_id: projectId});
  }
}
