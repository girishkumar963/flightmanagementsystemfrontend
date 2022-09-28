import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/models/passenger.model';
import { PassengerserviceService } from 'src/app/services/passengerservice.service';

@Component({
  selector: 'app-addpassenger',
  templateUrl: './addpassenger.component.html',
  styleUrls: ['./addpassenger.component.css']
})

export class addpassengerComponent implements OnInit {

  passenger: Passenger;
  addPassengerForm: FormGroup;

  constructor(private passengerService: PassengerserviceService, private router: Router) { }

  ngOnInit(): void {
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
    this.passenger = {
      pnrNumber: this.addPassengerForm.value.pnrNumber,
      passengerName: this.addPassengerForm.value.passengerName,
      passengerAge: this.addPassengerForm.value.passengerAge,
      gender: this.addPassengerForm.value.gender,
      passengerUIN: this.addPassengerForm.value.passengerUIN,
      luggage: this.addPassengerForm.value.luggage
    }

    this.passengerService.postPassenger(this.passenger).subscribe({

    });

    alert("Passenger added successfully now you can go through booking");
    this.router.navigateByUrl('');
  }

}
