import { Injectable } from '@nestjs/common';
import { TaskListEntity } from '../entities/task-list.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskListDto } from '../dto/create-task-list.dto';

@Injectable()
export class TaskListsService {
  constructor(
    @InjectRepository(TaskListEntity)
    private taskListsRepository: Repository<TaskListEntity>,
  ) {}

  async create(payload: CreateTaskListDto): Promise<TaskListEntity> {
    const taskList = this.taskListsRepository.create(payload);
    return this.taskListsRepository.save(taskList);
  }

  findAll(): Promise<TaskListEntity[]> {
    return this.taskListsRepository.find();
  }
}
