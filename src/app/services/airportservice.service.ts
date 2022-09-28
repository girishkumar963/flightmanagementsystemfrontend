import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airport } from '../models/airport.model';

@Injectable({
  providedIn: 'root'
})
export class AirportserviceService {

  airport: Airport;

  url = 'http://localhost:8888/airports';

  constructor(private airportService: HttpClient) { }

  getAirports(): Observable<Airport[]> {
    return this.airportService.get<Airport[]>(this.url);
  }

  getAirportById(id: number): Observable<Airport> {
    return this.airportService.get<Airport>(this.url + "/" + id);
  }

  getAirportByCode(code: string): Observable<Airport> {
    return this.airportService.get<Airport>(this.url + "/airportCode/" + code);
  }
}
