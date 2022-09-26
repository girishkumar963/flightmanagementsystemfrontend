import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduledFlight } from '../models/scheduledflight.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduledflightserviceService {
  private getAllScheduledFlightsApi : string;
  
  constructor(private http:HttpClient) { 
    this.getAllScheduledFlightsApi = "http://localhost:8888/scheduledflight"
  }

  public getAllScheduledFlights():Observable<ScheduledFlight[]>{
    return this.http.get<ScheduledFlight[]>(this.getAllScheduledFlightsApi);
  }
}
