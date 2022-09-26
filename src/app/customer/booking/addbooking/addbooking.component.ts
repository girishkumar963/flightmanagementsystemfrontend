import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduledFlight } from 'src/app/models/scheduledflight.model';
import { ScheduledflightserviceService } from 'src/app/services/scheduledflightservice.service';
@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.css']
})
export class AddbookingComponent implements OnInit {

  flightform:FormGroup;
  flightsArray:ScheduledFlight[];

  constructor(private router: Router,private flightService:ScheduledflightserviceService) { }

  ngOnInit(): void {
    this.flightform= new FormGroup({
      srcairport:new FormControl(),
      dstnairport:new FormControl(),
      flightdate:new FormControl()
    })

    

  }
  viewbooking=()=>{
    this.router.navigateByUrl('/viewbooking')
  }

  onFormSubmit(){
    this.flightService.getAllScheduledFlights().subscribe(data => {
      this.flightsArray = data;
    })
    let srcAirport = this.flightform.value.srcairport;
    let dstnAirport = this.flightform.value.dstnairport;
    let flightdate = this.flightform.value.flightdate;
    console.log("Source :"+srcAirport+" Destination: "+dstnAirport+" Date: "+flightdate);
    let updatedflightsArray = this.flightsArray.filter((obj)=>{
      console.log(obj.schedule.arrDateTime.getDate)
      return (obj.schedule.srcAirport.airportLocation===srcAirport && obj.schedule.dstnAirport.airportLocation===dstnAirport && obj.schedule.arrDateTime.getDate===flightdate);
    })
    
    console.log(updatedflightsArray);
  }



}
