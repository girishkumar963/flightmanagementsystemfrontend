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
import { LoginComponent } from './admin/adminuser/login/login.component';
import { AdminhomeComponent } from './admin/adminuser/adminhome/adminhome.component';
import { addpassengerComponent } from './customer/passenger/addpassenger/addpassenger.component';
import { UpdatepassengerComponent } from './customer/passenger/updatepassenger/updatepassenger.component';
import { ViewpassengerComponent } from './customer/passenger/viewpassenger/viewpassenger.component';
import { AdduserComponent } from './admin/adminuser/adduser/adduser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddscheduledflightComponent } from './admin/scheduledflight/addscheduledflight/addscheduledflight.component';
import { ViewscheduledflightComponent } from './admin/scheduledflight/viewscheduledflight/viewscheduledflight.component';
import { UpdatescheduledflightComponent } from './admin/scheduledflight/updatescheduledflight/updatescheduledflight.component';
import { DeletescheduledflightComponent } from './admin/scheduledflight/deletescheduledflight/deletescheduledflight.component';
import { ViewairportComponent } from './admin/airport/viewairport/viewairport.component';
import { AirportlistComponent } from './admin/airport/airportlist/airportlist.component';
const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'customerhome/:uid',component:CustomerhomeComponent},
  {path:'viewbooking/:uid',component:ViewbookingComponent},
  {path:'addbooking/:uid',component:AddbookingComponent},
  {path:'signup',component:SignupComponent},
  {path:'customerlogin',component:UserloginComponent},
  {path:'updatebooking',component:UpdatebookingComponent},
  {path:'mydetails',component:CustomerdetailsComponent},
  {path:'deletebooking/:bid',component:DeletebookingComponent},
  {path:'adminlogin',component:LoginComponent},
  {path:'adminhome',component:AdminhomeComponent,
    children:[
      {path:'adduser',component:AdduserComponent},
      { path: 'addsf', component: AddscheduledflightComponent },
      { path: 'viewAllsf', component: ViewscheduledflightComponent },
      { path: 'modifysf', component: UpdatescheduledflightComponent },
      { path: 'deletesf', component: DeletescheduledflightComponent },
      { path: 'viewairport',component:ViewairportComponent},
      { path: 'airportlist',component:AirportlistComponent}
  ]},
  {path:'addpassenger/:bid',component:addpassengerComponent},
  {path:'updatepassenger',component:UpdatepassengerComponent},
  {path:'viewpassenger',component:ViewpassengerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
