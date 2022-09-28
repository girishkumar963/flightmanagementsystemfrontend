import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/models/passenger.model';
import { PassengerserviceService } from 'src/app/services/passengerservice.service';

@Component({
  selector: 'app-updatepassenger',
  templateUrl: './updatepassenger.component.html',
  styleUrls: ['./updatepassenger.component.css']
})
export class UpdatepassengerComponent implements OnInit {

  id: number;
  passenger: Passenger;
  updateForm: FormGroup;
  updatedPassenger: Passenger;

  constructor(private passengerService: PassengerserviceService, private router: Router) { }

  ngOnInit(): void {
    //update all the data
    this.updateForm = new FormGroup({
      passengerName: new FormControl(''),
      passengerAge: new FormControl(''),
      passengerUIN: new FormControl(''),
      luggage: new FormControl('')


    });
  }

  onUpdateClick() {
    this.updatedPassenger = {
      passengerName: this.updateForm.value.passengerName,
      passengerAge: this.updateForm.value.passengerAge,
      passengerUIN: this.updateForm.value.passengerUIN,
      luggage: this.updateForm.value.luggage

    };

    this.passengerService.updatePassenger(this.id, this.updatedPassenger).subscribe(data => {
      this.passenger = data;
    });

    alert("Passenger details updated succesfully.");
    this.router.navigateByUrl("");

  }
  getUpdateFormControl() {
    return this.updateForm.controls;
  }

}
