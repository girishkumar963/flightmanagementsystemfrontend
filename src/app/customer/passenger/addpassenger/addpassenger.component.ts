import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { Passenger } from 'src/app/models/passenger.model';
import { BookingserviceService } from 'src/app/services/bookingservice.service';
import { PassengerserviceService } from 'src/app/services/passengerservice.service';

@Component({
  selector: 'app-addpassenger',
  templateUrl: './addpassenger.component.html',
  styleUrls: ['./addpassenger.component.css']
})

export class addpassengerComponent implements OnInit {

  passenger: Passenger;
  addPassengerForm: FormGroup;
  noOfPassenger: number;
  arr=Array;
  booking:Booking;
  bid:number;
  constructor(private bookingService:BookingserviceService, private passengerService: PassengerserviceService, private router: Router,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params=>{
      this.bid=params.bid;
      this.bookingService.getBookinByBookingId(this.bid).subscribe(data => {
        this.booking = data;
        this.noOfPassenger = this.booking.noOfPassengers;
      })
    })
    
    this.addPassengerForm = new FormGroup({
      pnrNumber: new FormControl(''),
      passengerName: new FormControl(''),
      passengerAge: new FormControl(''),
      gender: new FormControl(''),
      passengerUIN: new FormControl(''),
      luggage: new FormControl('')

    });

  }

  onSubmit() {
    this.actRoute.params.subscribe(params=>{
      this.bid=params.bid;
      this.bookingService.getBookinByBookingId(this.bid).subscribe(data=>{
        this.booking=data;
        this.passenger = {
          pnrNumber: this.addPassengerForm.value.pnrNumber,
          passengerName: this.addPassengerForm.value.passengerName,
          passengerAge: this.addPassengerForm.value.passengerAge,
          gender: this.addPassengerForm.value.gender,
          passengerUIN: this.addPassengerForm.value.passengerUIN,
          luggage: this.addPassengerForm.value.luggage,
          booking:this.booking
        }
        this.passengerService.postPassenger(this.passenger).subscribe(data=>{
          this.passenger=data;
        });
        console.log(this.passenger);
        alert("Passenger added successfully");
      })
    })
    
  }

}
