import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  passengers: Observable<Passenger[]>;
  passenger: Passenger;

  constructor(private passengerService: PassengerserviceService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();

    this.passengerService.getPassenger(this.passId).subscribe(data => {
      this.passenger = data;
    });
  }

  reloadData() {
    this.passengers = this.passengerService.getAllPassengers();
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

