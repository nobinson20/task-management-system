import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NotfoundErrorComponent } from './components/notfound-error/notfound-error.component';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'quoteDetail/:id', component: QuoteDetailComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', component: NotfoundErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  LoginComponent,
  TasksComponent,
  RegisterComponent,
  QuoteDetailComponent,
];
