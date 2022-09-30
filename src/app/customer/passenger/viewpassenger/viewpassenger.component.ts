import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Passenger } from 'src/app/models/passenger.model';
import { PassengerserviceService } from 'src/app/services/passengerservice.service';

@Component({
  selector: 'app-viewpassenger',
  templateUrl: './viewpassenger.component.html',
  styleUrls: ['./viewpassenger.component.css']
})
export class ViewpassengerComponent implements OnInit {

  passId: number;
  passengers: Passenger[];
  passenger: Passenger;
  bookingId:number;
  constructor(private passengerService: PassengerserviceService, private router: Router,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params=>{
      this.bookingId=params.bid;
      this.passengerService.getPassengersByBookingId(this.bookingId).subscribe(data=>{
        this.passengers=data;
      })
    })
  }

  reloadData() {
    
  }

  viewFullDetails = () => {

  }

  updateDetails = () => {
    this.router.navigateByUrl('/updatepassenger')
  }

  deletepassenger(id: number) {
    this.passengerService.deletePassenger(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }


}

