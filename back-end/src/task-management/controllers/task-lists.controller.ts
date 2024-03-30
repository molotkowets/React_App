import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskListDto } from '../dto/create-task-list.dto';
import { TaskListsService } from '../services/task-lists.service';
import { TaskListEntity } from '../entities/task-list.entity';

@Controller('task-lists')
export class TaskListsController {
  constructor(private readonly taskListsService: TaskListsService) {}

  @Post()
  create(
    @Body() createTaskListDto: CreateTaskListDto,
  ): Promise<TaskListEntity> {
    return this.taskListsService.create(createTaskListDto);
  }

  @Get()
  fetchAll(): Promise<TaskListEntity[]> {
    return this.taskListsService.findAll();
  }
}
