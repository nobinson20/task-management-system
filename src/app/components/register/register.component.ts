import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // @Input()
  // notLoggedIn: boolean = true;

  // @Output()
  // onRegister: EventEmitter<boolean> = new EventEmitter();

  username!: string;
  password!: string;
  confirmPassword!: string;

  constructor(
    private _router: Router,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {}

  registerUser() {
    this.accountService
      .register(this.username, this.password, this.confirmPassword)
      .subscribe({
        next: (data: any) => {
          if (data == null) {
            console.log(data);
            Swal.fire(
              'Thank you for sign up!',
              'Registraction successful',
              'success'
            );
            this.username = '';
            this.password = '';
            this.confirmPassword = '';

            this._router.navigate(['/login']);
          }
        },
        error: (e) => {
          console.log(e);
          Swal.fire('Username already exists. Please try different one.');
          this._router.navigate(['/register']);
        },
      });
  }

  // check if there is at least one character and at least one number
  isPwdPatternMatched(value: any) {
    if (typeof value != 'string') {
      return false;
    }

    let charCheck: boolean = false;
    let numberCheck: boolean = false;

    for (var i = 0; i < value.length; i++) {
      var c = value.charAt(i);
      if (/^[a-zA-Z]+$/.test(c)) {
        charCheck = true;
        break;
      }
    }

    for (var i = 0; i < value.length; i++) {
      var c = value.charAt(i);
      if (/\d/.test(c)) {
        numberCheck = true;
        break;
      }
    }

    return charCheck && numberCheck;
  }

  emailValid(value: any) {
    if (typeof value != 'string') {
      return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return true;
    }
    return false;
  }
}
