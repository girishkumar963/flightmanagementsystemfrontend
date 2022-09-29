import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiServerUrl:string;

  constructor(private http: HttpClient) {
    this.apiServerUrl = 'http://localhost:8888/flights';
   }

  public getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiServerUrl);
  }

  public getFlightById(flightNo: number): Observable<Flight> {
    return this.http.get<Flight>(this.apiServerUrl + "/" + flightNo);
  }

  public postFlight(flight: Flight): Observable<Flight> {
    return this.http.post<Flight>(this.apiServerUrl, flight);
  }

  public updateFlight(flight: Flight, flightNo: number): Observable<Flight> {
    return this.http.put<Flight>(this.apiServerUrl + "/" + flightNo, flight);
  }

  public deleteFlight(flightNo: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl + "/" + flightNo);
  }
}
