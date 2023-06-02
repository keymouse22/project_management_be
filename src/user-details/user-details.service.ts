import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user-detail.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserDetailsService {
  constructor(@InjectModel('Users') private userModel : Model<User>, 
  private jwtService: JwtService
  ) { }

  async create(createUserDetailDto: CreateUserDetailDto){
    const saltOrRounds = 10;
    const userDetail = await this.userModel.findOne({"email": createUserDetailDto.email});
    const password = createUserDetailDto.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    try {
      if (userDetail === null) {
        const createdUser = await new this.userModel({...createUserDetailDto, "password" : hash}).save();
        return {email:createdUser.email, name: createdUser.name};
      } else {
        throw new UnauthorizedException();
      }
    } catch (error) {
      throw new UnauthorizedException();
    } 
  }

  async login (createUserDetailDto: CreateUserDetailDto) {
    const password = createUserDetailDto.password
    try {
      const userDetail = await this.userModel.findOne({"email": createUserDetailDto.email})
      const payload = { username: userDetail.email };
      const isMatch = await bcrypt.compare(password, userDetail.password);
      if (isMatch) {
        return {
          name: userDetail.name,
          email: userDetail.email,
          access_token: await this.jwtService.signAsync(payload),
        };
      }else {
        throw new UnauthorizedException();
      }
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} userDetail`;
  }

  update(id: number, updateUserDetailDto: UpdateUserDetailDto) {
    return `This action updates a #${id} userDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} userDetail`;
  }
}
