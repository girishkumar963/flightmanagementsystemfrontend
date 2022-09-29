import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Flight } from 'src/app/models/flight.model';
import { FlightService } from 'src/app/services/flightservice.service';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  message: any;
  flights: Flight[];
  public deleteFlight: Flight;
  flight: Flight=new Flight();

  constructor(private flightService: FlightService, private fb: FormBuilder) { }
  formValue: FormGroup;

  flightToUpdate = {
    flightNo: 1,
    flightModel: "",
    carrierName: "",
    seatCapacity: 0

  };
  ngOnInit(): void {
    this.getFlights();
  }

  

  getFlights() {
    this.flightService.getFlights().subscribe(response => {
      this.flights = response;
      console.log(this.flights);
    });

  }

  delete(flightNo: number) {
    this.flightService.deleteFlight(flightNo).subscribe(response => {
      console.log(response);
      this.getFlights();
    });
  }

  addFlight() {
    this.flightService.postFlight(this.flight).subscribe((data) => {
      console.log(data);
      alert("Flight added successfully");

      this.getFlights();
    },
      (error) => {
        console.log(error);
        alert("Flight is not added ");
      }
    );

  }
  onSubmit() {
    console.log(this.flight);
    this.addFlight();
  }

  update(flight: any) {
    this.flightToUpdate = flight;

  }

  updateFlight() {
    this.flightService.updateFlight(this.flightToUpdate, this.flightToUpdate.flightNo).subscribe(
      (response) => {
        console.log(response);
        this.getFlights();
      },
      (error) => {
        console.log(error);
      }
    );

  }

  viewFlight(flightNo: number) {
    this.flightService.getFlightById(flightNo).subscribe(
      (response) => {
        this.flight = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
        alert("flight does not exist")
      }
    );


  }

}
