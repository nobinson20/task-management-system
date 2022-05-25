import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HighlightDirective } from './directives/highlight.directive';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
// import { TasksComponent } from './components/tasks/tasks.component';
// import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RxjsPlaygroundComponent } from './components/rxjs-playground/rxjs-playground.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';

import { NotfoundErrorComponent } from './components/notfound-error/notfound-error.component';
import { AuthGuard } from './auth/auth.guard';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { QuoteDetailComponent } from './components/quote-detail/quote-detail.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';

@NgModule({
  declarations: [
    AppComponent,

    routingComponents,

    RegisterComponent,
    RxjsPlaygroundComponent,
    AddTaskComponent,
    HeaderComponent,
    ButtonComponent,
    HighlightDirective,
    NavbarComponent,
    NotfoundErrorComponent,
    QuoteDetailComponent,
    UpdateTaskComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents:[AddTaskComponent]
})
export class AppModule {}
