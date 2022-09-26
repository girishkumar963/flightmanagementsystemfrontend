import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddbookingComponent } from './customer/booking/addbooking/addbooking.component';
import { ViewbookingComponent } from './customer/booking/viewbooking/viewbooking.component';
import { CustomerhomeComponent } from './customer/customeruser/customerhome/customerhome.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './customer/customeruser/userlogin/userlogin.component';
import { UpdatebookingComponent } from './customer/booking/updatebooking/updatebooking.component';
import { CustomerdetailsComponent } from './customer/customeruser/customerdetails/customerdetails.component';
import { DeletebookingComponent } from './customer/booking/deletebooking/deletebooking.component';
const routes: Routes = [
  {path:'customerhome/:uid',component:CustomerhomeComponent},
  {path:'viewbooking/:bid',component:ViewbookingComponent},
  {path:'addbooking',component:AddbookingComponent},
  {path:'signup',component:SignupComponent},
  {path:'customerlogin',component:UserloginComponent},
  {path:'updatebooking',component:UpdatebookingComponent},
  {path:'mydetails',component:CustomerdetailsComponent},
  {path:'deletebooking/:bid',component:DeletebookingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
