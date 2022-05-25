import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router, private _accountService : AccountService) { }

  ngOnInit(): void {
  }

  goodToShowLogout(){
    let isTasksRoute = this._router.url == '/tasks';


    return isTasksRoute;
  }

  logout(){
    this._accountService.logout();
    this._router.navigate(['login']);
  }

}
