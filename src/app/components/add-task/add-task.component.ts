import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  QuoteType!: string;
  Contact!: string;
  Task!: string;
  DueDate!: Date;
  TaskType!: string;

  // @Input()
  // notLoggedIn: boolean = true;

  public viewDueDate!: string;

  constructor(
    private taskService: TaskService,
    private dialogRef: MatDialogRef<AddTaskComponent>
  ) {}

  ngOnInit(): void {
    this.viewDueDate = new Date(Date.now())
      .toISOString()
      .replace('T', ' ')
      .substring(0, 19);
  }

  save() {
    // const task = {
    //   QuoteType: this.QuoteType,
    //   Contact: this.Contact,
    //   Task: this.Task,
    // DueDate: new Date( moment(this.DueDate).format("YYYY-MM-DDTHH:MM")),
    // TaskType: this.TaskType

    // }

    let task: Task = {
      QuoteType: this.QuoteType,
      Contact: this.Contact,
      Task: this.Task,
      DueDate: new Date(
        new Date(this.DueDate).toISOString().replace('T', ' ').substring(0, 19)
      ),
      TaskType: this.TaskType,
    };

    // this.onAddTask.emit(task);
    this.addTask(task);

    this.QuoteType = '';
    this.Contact = '';
    this.Task = '';
    this.DueDate = new Date();
    this.TaskType = '';

    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  addTask(task: Task) {
    if (
      task.Contact != null &&
      task.DueDate != null &&
      task.QuoteType != null &&
      task.Task != null &&
      task.TaskType != null
    ) {
      this.taskService.postTask(task).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.error(error);
        },
      });
    }

  }
}
