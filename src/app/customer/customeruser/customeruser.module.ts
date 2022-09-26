import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerhomeComponent } from './customerhome/customerhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';


@NgModule({
  declarations: [
    CustomerhomeComponent,
    UserloginComponent,
    CustomerdetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CustomerhomeComponent,
    UserloginComponent,
    CustomerdetailsComponent
  ]
})
export class CustomeruserModule { }
