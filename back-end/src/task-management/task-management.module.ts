import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskListEntity } from './entities/task-list.entity';
import { TaskListsController } from './controllers/task-lists.controller';
import { TaskListsService } from './services/task-lists.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskListEntity])],
  controllers: [TaskListsController],
  providers: [TaskListsService],
})
export class TaskManagementModule {}
