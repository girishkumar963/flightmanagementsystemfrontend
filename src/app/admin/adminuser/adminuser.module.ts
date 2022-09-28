import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdduserComponent } from './adduser/adduser.component';



@NgModule({
  declarations: [
    LoginComponent,
    AdminhomeComponent,
    AdduserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  exports: [
    LoginComponent,
    AdminhomeComponent,
  ]
})
export class AdminuserModule { }
