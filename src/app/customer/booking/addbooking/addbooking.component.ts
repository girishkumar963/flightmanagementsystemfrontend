import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { Schedule } from 'src/app/models/schedule.model';
import { ScheduledFlight } from 'src/app/models/scheduledflight.model';
import { User } from 'src/app/models/user.model';
import { ScheduledflightserviceService } from 'src/app/services/scheduledflightservice.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import { DatePipe } from '@angular/common';
import { BookingserviceService } from 'src/app/services/bookingservice.service';

@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.css']
})
export class AddbookingComponent implements OnInit {

  flightform:FormGroup;
  flightsArray:ScheduledFlight[];
  updatedflightsArray:ScheduledFlight[];
  status:boolean = false;
  message:string;
  showModal:boolean=false;
  scheduleFlight: ScheduledFlight;
  user:User;
  uid:number;
  booking:Booking;
  date:Date;
  bookingform:FormGroup

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
  sf:ScheduledFlight;
  sfid:number;

  flightNo: number;
  flightModel: string;
  carrierName: string;
  seatCapacity: number;
  @ViewChild('content') content:any;

  constructor(private bookingService:BookingserviceService, public datepipe:DatePipe, private router: Router,private flightService:ScheduledflightserviceService,private actRoute:ActivatedRoute,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.flightform= new FormGroup({
      srcairport:new FormControl(),
      dstnairport:new FormControl(),
      flightdate:new FormControl()
    })
    this.bookingform = new FormGroup({
      noOfPassengers: new FormControl()
    })

    this.flightService.getAllScheduledFlights().subscribe(data => {
      this.flightsArray = data;
    })

  }

  viewFullDetails(scheduleFlightId:number){
    this.flightService.getScheduledFlightById(scheduleFlightId).subscribe(data=>{
      this.sf = data;
      this.sfid = this.sf.scheduleFlightId;
      this.ticketCost = this.sf.ticketCost;
      this.arrDateTime = this.sf.schedule.arrDateTime;
      this.deptDateTime = this.sf.schedule.deptDateTime;
      this.dstnairportCode = this.sf.schedule.dstnAirport.airportCode;
      this.dstnairportLocation = this.sf.schedule.dstnAirport.airportLocation;
      this.dstnairportName = this.sf.schedule.dstnAirport.airportName;
      this.srcairportCode = this.sf.schedule.srcAirport.airportCode;
      this.srcairportLocation = this.sf.schedule.srcAirport.airportLocation;
      this.srcairportName = this.sf.schedule.srcAirport.airportName;
      this.flightNo = this.sf.flight.flightNo;
      this.flightModel = this.sf.flight.flightModel; 
      this.carrierName= this.sf.flight.carrierName;
      this.seatCapacity=this.sf.flight.seatCapacity;
    })
  }

  viewbooking=()=>{
    this.router.navigateByUrl('/viewbooking')
  }

  onFormSubmit(){
    let srcAirport = this.flightform.value.srcairport;
    let dstnAirport = this.flightform.value.dstnairport;
    let flightdate = this.flightform.value.flightdate;
    this.updatedflightsArray = this.flightsArray.filter((obj)=>{
      return (obj.schedule.srcAirport.airportLocation===srcAirport && obj.schedule.dstnAirport.airportLocation===dstnAirport)
    })
    if(this.updatedflightsArray.length>0){
      this.status = true;
    }
    else{
      this.message = "No Flights Available!!!"
      this.showModal=true;
      alert("No Flights Available!!!")
    }
  }

  bookflight(sid:number){
      this.flightService.getScheduledFlightById(sid).subscribe(data=>{
        this.scheduleFlight=data;
        this.actRoute.params.subscribe(params => {
          this.uid = params.uid
          this.userService.getUserById(this.uid).subscribe(data => {
            this.user = data;
            this.date = new Date();
            let latest_date = this.datepipe.transform(this.date, 'yyyy-MM-dd');
            let noOfPassengers = this.bookingform.value.noOfPassengers;
            this.booking = {
              user: this.user,
              scheduledFlight: this.scheduleFlight,
              noOfPassengers: noOfPassengers,
              bookingDate: latest_date
            }
            if(this.scheduleFlight.availableSeats<noOfPassengers){
              alert("No Seats Available!!!")
            }
            else{
              console.log(this.booking.noOfPassengers, this.booking.scheduledFlight.scheduleFlightId, this.booking.user.userId);
              this.bookingService.postBooking(this.booking).subscribe(data => {
                this.booking = data;
                alert("Booking is Initialized You will be redirected to view bookings page Update the booking to add passenger data")
                this.router.navigateByUrl('/viewbooking/'+this.user.userId)
              })
            }
            
          })
        })
        
      })
      
      
    

  }



}
