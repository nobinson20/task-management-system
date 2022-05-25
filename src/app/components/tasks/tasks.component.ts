import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Router } from '@angular/router';
import { UpdateTaskComponent } from '../update-task/update-task.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  dataSource!: MatTableDataSource<Task>;
  displayedColumns: string[] = [
    'ID',
    'QuoteType',
    'Contact',
    'Task',
    'DueDate',
    'TaskType',
    'Actions',
  ];
  properties: string[] = [
    'Item No.',
    'Quote type',
    'Contact',
    'Task',
    'Due Date',
    'Task type',
  ];

  @ViewChild(MatTable) table!: MatTable<Task>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  option: string = 'Item No.';
  reverseOption: boolean = false;

  searchKey: string = '';

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.dataSource = new MatTableDataSource(this.tasks);
      this.dataSource.paginator = this.paginator;
    });
  }

  // ngAfterViewInit() {
  //   this.dataSource = new MatTableDataSource(this.tasks);
  // }

  onChange(selectedOption: any) {
    this.option = selectedOption.value;
    this.tasksSort();
  }

  onChangeDesc(descOption: any) {
    this.reverseOption = descOption.checked;
    this.tasksSort();
  }

  tasksSort() {
    let reverseOption = this.reverseOption;
    let option = this.option;

    switch (option) {
      case 'Item No.':
        if (reverseOption) {
          this.tasks = this.tasks.sort((a, b) => b.ID! - a.ID!);
        } else {
          this.tasks = this.tasks.sort((a, b) => a.ID! - b.ID!);
        }

        this.dataSource.data = this.tasks;
        this.table.renderRows();

        break;

      case 'Quote type':
        if (reverseOption) {
          this.tasks = this.tasks.sort((a, b) =>
            b.QuoteType.localeCompare(a.QuoteType)
          );
        } else {
          this.tasks = this.tasks.sort((a, b) =>
            a.QuoteType.localeCompare(b.QuoteType)
          );
        }
        this.dataSource.data = this.tasks;
        this.table.renderRows();
        break;

      case 'Contact':
        if (reverseOption) {
          this.tasks = this.tasks.sort((a, b) =>
            b.Contact.localeCompare(a.Contact)
          );
        } else {
          this.tasks = this.tasks.sort((a, b) =>
            a.Contact.localeCompare(b.Contact)
          );
        }
        this.dataSource.data = this.tasks;
        this.table.renderRows();
        break;

      case 'Task':
        if (reverseOption) {
          this.tasks = this.tasks.sort((a, b) => b.Task.localeCompare(a.Task));
        } else {
          this.tasks = this.tasks.sort((a, b) => a.Task.localeCompare(b.Task));
        }
        this.dataSource.data = this.tasks;
        this.table.renderRows();
        break;

      case 'Due Date':
        if (reverseOption) {
          this.tasks = this.tasks.sort((a, b) =>
            b.DueDate.toLocaleString().localeCompare(a.DueDate.toLocaleString())
          );
        } else {
          this.tasks = this.tasks.sort((a, b) =>
            a.DueDate.toLocaleString().localeCompare(b.DueDate.toLocaleString())
          );
        }
        this.dataSource.data = this.tasks;
        this.table.renderRows();
        break;

      case 'Task type':
        if (reverseOption) {
          this.tasks = this.tasks.sort((a, b) =>
            b.TaskType.localeCompare(a.TaskType)
          );
        } else {
          this.tasks = this.tasks.sort((a, b) =>
            a.TaskType.localeCompare(b.TaskType)
          );
        }
        this.dataSource.data = this.tasks;
        this.table.renderRows();
        break;
    }
  }

  onSearchInput() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
    this.table.renderRows();
  }

  onAddTask() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    this.dialog
      .open(AddTaskComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => {
        this.taskService.getTasks().subscribe((tasks) => {
          this.tasks = tasks;
          this.dataSource.data = this.tasks;
        });
        this.table.renderRows();
      });
  }

  // navigate to QuoteDetail
  onDetail(id: any) {
    this._router.navigate(['/quoteDetail/' + id]);
  }

  onEdit(id: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.data = id;
    this.dialog
      .open(UpdateTaskComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => {
        this.taskService.getTasks().subscribe((tasks) => {
          this.tasks = tasks;
          this.dataSource.data = this.tasks;
        });
        this.table.renderRows();
      });
  }

  onDelete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService.deleteTask(id).subscribe(() => {
          this.taskService.getTasks().subscribe((tasks) => {
            this.tasks = tasks;
            this.dataSource.data = this.tasks;
          });
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          this.table.renderRows();
        });
      }
    });
  }
}
