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
    const createdUser = await new this.userProjectModel({...createUserProjectDto}).save();
    return createdUser;
  }

  findAll() {
    return this.userProjectModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} userProject`;
  }

  update(id: number, updateUserProjectDto: UpdateUserProjectDto) {
    return `This action updates a #${id} userProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} userProject`;
  }
}
