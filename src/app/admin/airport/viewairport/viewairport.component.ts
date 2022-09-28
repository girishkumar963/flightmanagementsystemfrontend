import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/models/airport.model';
import { AirportserviceService } from 'src/app/services/airportservice.service';

@Component({
  selector: 'app-viewairport',
  templateUrl: './viewairport.component.html',
  styleUrls: ['./viewairport.component.css']
})
export class ViewairportComponent implements OnInit {

  airportId: number;
  airportCode: string;

  airport: Airport;

  constructor(private airportService: AirportserviceService) { }

  public search() {
    this.airportService.getAirportById(this.airportId).subscribe((data) => {
      this.airport = data;
    })
  }

  public searchbycode() {
    this.airportService.getAirportByCode(this.airportCode).subscribe((data) => {
      this.airport = data;
    })
  }

  ngOnInit(): void {
  }

}
