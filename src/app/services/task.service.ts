import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { Observable } from 'rxjs';

// let httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//   }),
// };

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://localhost:44351/api/';
  constructor(private http: HttpClient) {}

  public task!: Task;

  getTasks(): Observable<Task[]> {
    let _headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.get<Task[]>(this.apiUrl + 'quote', { headers: _headers });
  }

  getTaskById(id: number): Observable<Task> {
    let _headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    return this.http.get<Task>(this.apiUrl + 'quote/' + id.toString(), {
      headers: _headers,
    });
  }

  postTask(task: Task): Observable<Task> {
    let _headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    // @TODO: this info shall be obtained from app-add-task component

    return this.http.post<Task>(this.apiUrl + 'quote', task, {
      headers: _headers,
    });
  }

  updateTask(task: Task): Observable<Task> {
    let _headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    // @TODO: this info shall be obtained from app-add-task component

    return this.http.patch<Task>(this.apiUrl + 'quote/'+task.ID, task, {
      headers: _headers,
    });
  }

  deleteTask(id: number): Observable<Task> {
    let _headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    // @TODO: this info shall be obtained from app-add-task component

    return this.http.delete<Task>(this.apiUrl + 'quote/'+id, {
      headers: _headers,
    });
  }

  // updateTaskReminder(task: Task): Observable<Task>{
  //   const url = `${this.apiUrl}/${task.ID}`;
  //   return this.http.put<Task>(url, task, httpOptions);
  // }

  // addTask(task: Task): Observable<Task>{
  //   const url = `${this.apiUrl}/`;
  //   return this.http.post<Task>(url, task, httpOptions);
  // }
}
