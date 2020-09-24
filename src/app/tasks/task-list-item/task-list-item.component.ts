import { TaskService } from './../shared/task.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  @Input()
  task: Task;
  @Output()
  onDeleteTask = new EventEmitter()

  constructor(private TaskService: TaskService) { }

  ngOnInit() {
  }
  remove(task: Task) {
    this.TaskService.delete(task._id).subscribe();
    this.onDeleteTask.emit(task);
  }
  onCompletedCheckChange(task: Task) {
    this.TaskService.save(task).subscribe(task => {
      console.log(task);
    });
  }
}
