import { TaskService } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  title: string = 'Nova Tarefa';
  constructor(
    private activatedRoute: ActivatedRoute,
    private roter: Router,
    private TaskService: TaskService
  ) { }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.TaskService.getById(id).subscribe(task => {
        this.task = task;
        this.title = 'Alterando Tarefa';
      });

    }
  }

  onSubmit() {
    this.TaskService.save(this.task).subscribe(task => {
      console.log(task);
      this.roter.navigate(['']);

    });

  }

}
