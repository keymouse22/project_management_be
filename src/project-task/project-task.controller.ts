import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectTaskService } from './project-task.service';
import { CreateProjectTaskDto } from './dto/create-project-task.dto';
import { UpdateProjectTaskDto } from './dto/update-project-task.dto';

@Controller('project-task')
export class ProjectTaskController {
  constructor(private readonly projectTaskService: ProjectTaskService) {}

  @Post()
  create(@Body() createProjectTaskDto: CreateProjectTaskDto) {
    return this.projectTaskService.create(createProjectTaskDto);
  }

  @Get()
  findAll() {
    return this.projectTaskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectTaskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectTaskDto: UpdateProjectTaskDto) {
    return this.projectTaskService.update(+id, updateProjectTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectTaskService.remove(+id);
  }
}
