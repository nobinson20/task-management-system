import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output()
  onLogin: EventEmitter<boolean> = new EventEmitter();

  username!: string;
  password!: string;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this.accountService.login(this.username, this.password).subscribe({
      next: (data: any) => {
        if (data.hasOwnProperty('access_token')) {
          localStorage.setItem('token', data['access_token']);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login success!',
            showConfirmButton: false,
          });

          this.router.navigate(['/tasks']).then(() => {
            setTimeout(() => window.location.reload(), 800);
          });
        }
      },
      error: (e: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: "User doesn't exist!",
        });
        this.router.navigate(['/login']);
      },
    });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
