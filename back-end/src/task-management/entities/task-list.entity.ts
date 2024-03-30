import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'task_lists',
})
export class TaskListEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  @IsNotEmpty()
  @MaxLength(50)
  @IsString()
  name: string;
}
