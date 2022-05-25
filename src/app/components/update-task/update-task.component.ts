import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  
  task! : Task;
  Id!: number;
  QuoteType!: string;
  Contact!: string;
  Task!: string;
  DueDate!: Date;
  TaskType!: string;
  
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,private taskService: TaskService,
  private dialogRef: MatDialogRef<UpdateTaskComponent>) { }

  ngOnInit(): void {
    this.taskService.getTaskById(+this.data).subscribe((task)=>{this.task=task;
      this.Id = this.task.ID!;
      this.QuoteType = this.task.QuoteType;
      this.Contact = this.task.Contact;
      this.Task = this.task.Task;
      this.DueDate = this.task.DueDate;
      this.TaskType = this.task.TaskType;
    
    });
  }

  save(){
    let task: Task = {
      ID: this.Id,
      QuoteType: this.QuoteType,
      Contact: this.Contact,
      Task: this.Task,
      DueDate: new Date(
        new Date(this.DueDate).toISOString().replace('T', ' ').substring(0, 19)
      ),
      TaskType: this.TaskType,
    };
    this.updateTask(task);

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

  updateTask(task: Task) {
    
      this.taskService.updateTask(task).subscribe({
        
        error: (error) => {
          console.error(error);
        },
      });
    

  }

}
