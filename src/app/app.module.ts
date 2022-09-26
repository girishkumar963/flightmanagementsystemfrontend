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
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
