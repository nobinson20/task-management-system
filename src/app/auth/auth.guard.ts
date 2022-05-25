import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  UserLogedIn : boolean = false;

  constructor(private router: Router, private accountService: AccountService) {
    this.UserLogedIn = accountService.isLoggedIn();
  }

  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard: canActivate called');
    if (this.UserLogedIn) {
      return true;
    }
    
    // if not loged in, automatically redirect to login page
    this.router.navigate(['/login']);
    return false;  
  }

}