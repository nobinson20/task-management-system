import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'https://localhost:44351/';

  constructor(private http: HttpClient) {}

  login(username: string, password:string) {

    let body = new URLSearchParams();
    body.set('grant_type', 'password');
    body.set('username', username);
    body.set('password', password);

    let options = {
      headers: new HttpHeaders().set(
        'Content-type',
        'application/x-www-form-urlencoded'
      ),
    };

    // debugger;
    return this.http.post(this.apiUrl + 'token', body, options);
  }

  register(username: string, password:string, confirmPassword: string){
    let body = {
      'Email': username,
      'Password': password,
      'ConfirmPassword': confirmPassword
    }


    let options = {
      headers: new HttpHeaders().set(
        'Content-type',
        'application/json'
      ),
    };

    return this.http.post(this.apiUrl + 'api/Account/Register', body, options);
  }

  isLoggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }

  logout(){
    localStorage.removeItem('token');
  }
}
