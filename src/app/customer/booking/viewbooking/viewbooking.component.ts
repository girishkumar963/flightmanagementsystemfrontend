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

  bid:number;
  bookings:Booking[];
  booking:Booking;
  bookingId:number;
  message:string;
  status:boolean;
  constructor(private bookingService:BookingserviceService,private actRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params=>{
      this.bid = params.bid;
    
    this.bookingService.getBookingByUserId(params.bid).subscribe(data=>{
      this.bookings = data;
    })
    })
  }
   
 
  viewFullDetails=()=>{
    
  }

  updateDetails=()=>{
    this.router.navigateByUrl('/updatebooking')
  }

  deleteDetails(bookingId:number){
    console.log(bookingId);
    this.bookingService.deleteBooking(bookingId).subscribe(data=>{
      this.message = "Booking Cancelled successfully"
      this.actRoute.params.subscribe(params => {
        this.bid = params.bid;

        this.bookingService.getBookingByUserId(params.bid).subscribe(data => {
          this.bookings = data;
        })
      })
    })
    //this.router.navigateByUrl('/deletebooking/'+bookingId);
  }

}
