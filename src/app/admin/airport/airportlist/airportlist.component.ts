import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airport } from 'src/app/models/airport.model';
import { AirportserviceService } from 'src/app/services/airportservice.service';

@Component({
  selector: 'app-airportlist',
  templateUrl: './airportlist.component.html',
  styleUrls: ['./airportlist.component.css']
})
export class AirportlistComponent implements OnInit {

  airports: Airport[];

  constructor(private airportService: AirportserviceService, private router: Router) { }

  ngOnInit(): void {
    this.airportService.getAirports().subscribe((data) => {
      this.airports = data;
    })
  }

}
