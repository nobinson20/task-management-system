import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  addTaskForm(): void{
    console.log("toggle works");
  }

  addTask(task: Task){

    

    if (task.Contact != null && task.DueDate != null && task.QuoteType != null && task.Task != null && task.TaskType != null){
      this.taskService.postTask(task).subscribe({
        next: data => {console.log(data)},
        error: error => {console.error(error)}
      });
    }

    // @Todo: Update tasks on the view: Is this needed?
  }

}
