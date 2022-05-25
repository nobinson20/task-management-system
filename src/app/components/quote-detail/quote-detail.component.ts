import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit, OnDestroy {
  id!: number;
  private sub: any;
  task!: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe((params) => {
      this.id = +params.get('id')!; // (+) converts string 'id' to a number
    });
    this.taskService.getTaskById(this.id).subscribe({
      next: (task) => (this.task = task),
      error: () => {
        this._router.navigate(['/notFound']);
      },
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
