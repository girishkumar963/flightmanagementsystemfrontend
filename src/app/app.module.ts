import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookingModule } from './customer/booking/booking.module';
import { CustomeruserModule } from './customer/customeruser/customeruser.module';
import { PassengerModule } from './customer/passenger/passenger.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AdminuserModule } from './admin/adminuser/adminuser.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AirportModule } from './admin/airport/airport.module';
import { ScheduledflightModule } from './admin/scheduledflight/scheduledflight.module';
import { FlightModule } from './admin/flight/flight.module';
import { ScheduleModule } from './admin/schedule/schedule.module';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BookingModule,
    CustomeruserModule,
    PassengerModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AdminuserModule,
    AirportModule,
    ScheduledflightModule,
    ScheduleModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
