import { Injectable } from '@nestjs/common';
import { CreateUserProjectDto } from './dto/create-user-project.dto';
import { UpdateUserProjectDto } from './dto/update-user-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { projects } from './entities/user-project.entity';

@Injectable()
export class UserProjectsService {
  constructor(@InjectModel('Projects') private userProjectModel : Model<projects>) {}

  async create(createUserProjectDto: CreateUserProjectDto) {
    await new this.userProjectModel({...createUserProjectDto}).save();
    return this.userProjectModel.find().exec();
  }

  async findAll() {
    return await this.userProjectModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} userProject`;
  }

  async update(updateUserProjectDto: UpdateUserProjectDto) {
    await this.userProjectModel.updateOne({"project_name": updateUserProjectDto.project_name});
    return this.userProjectModel.find().exec();
  }
 
  async remove(id: number) {
    await this.userProjectModel.deleteOne({"_id": id});
    return this.userProjectModel.find().exec();
  }
}
