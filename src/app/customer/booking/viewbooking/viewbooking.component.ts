import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { BookingserviceService } from 'src/app/services/bookingservice.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {

  uid:number;
  bookings:Booking[];
  booking:Booking;
  bookingid:number;
  message:string;
  status:boolean;
  currentBooking:Booking;
  bookingId?: number;
  bookingDate?: string;
  noOfPassengers?: number;
  ticketCost?: number;
  srcairportId?: number;
  srcairportName?: string;
  srcairportLocation?: string;
  srcairportCode?: string;
  dstnairportId?: number;
  dstnairportName?: string;
  dstnairportLocation?: string;
  dstnairportCode?: string;
  scheduleId?: number;
  deptDateTime?: Date;
  arrDateTime?: Date;
  flightModel:string;
  carriername:string;
  seatCapacity:number;
  flightid:number;

  constructor(private bookingService:BookingserviceService,private actRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.displayData();
  }
   
  displayData(){
    this.actRoute.params.subscribe(params => {
      this.uid = params.uid;

      this.bookingService.getBookingByUserId(params.uid).subscribe(data => {
        this.bookings = data;
      })
    })
  }
 
  viewFullDetails=(bid:number)=>{
    this.bookingService.getBookinByBookingId(bid).subscribe(data=>{
      this.currentBooking=data;
      this.bookingId = this.currentBooking.bookingId;
      this.bookingDate = this.currentBooking.bookingDate;
      this.noOfPassengers = this.currentBooking.noOfPassengers;
      this.ticketCost = this.currentBooking.ticketCost;
      this.arrDateTime = this.currentBooking.scheduledFlight.schedule.arrDateTime;
      this.deptDateTime = this.currentBooking.scheduledFlight.schedule.deptDateTime;
      this.dstnairportCode = this.currentBooking.scheduledFlight.schedule.dstnAirport.airportCode;
      this.dstnairportLocation = this.currentBooking.scheduledFlight.schedule.dstnAirport.airportLocation;
      this.dstnairportName = this.currentBooking.scheduledFlight.schedule.dstnAirport.airportName;
      this.srcairportCode = this.currentBooking.scheduledFlight.schedule.srcAirport.airportCode;
      this.srcairportLocation = this.currentBooking.scheduledFlight.schedule.srcAirport.airportLocation;
      this.srcairportName = this.currentBooking.scheduledFlight.schedule.srcAirport.airportName;
      this.carriername = this.currentBooking.scheduledFlight.flight.carrierName;
      this.seatCapacity = this.currentBooking.scheduledFlight.flight.seatCapacity;
      this.flightModel = this.currentBooking.scheduledFlight.flight.flightModel;
      this.flightid = this.currentBooking.scheduledFlight.flight.flightNo;
    })


  }

  updateDetails=(bid:number)=>{
    this.router.navigateByUrl('/addpassenger/'+bid);
  }

  deleteDetails(bookingId:number){
    console.log(bookingId);
    this.bookingService.deleteBooking(bookingId).subscribe(data=>{
      this.displayData();
      // this.actRoute.params.subscribe(params => {
      //   this.uid = params.uid;

      //   this.bookingService.getBookingByUserId(params.bid).subscribe(data => {
      //     this.bookings = data;
      //   })
      // })
    })

  }

}
