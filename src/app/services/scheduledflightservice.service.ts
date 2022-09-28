import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduledFlight } from '../models/scheduledflight.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduledflightserviceService {
  private getAllScheduledFlightsApi : string;
  private getScheduledFlightByIdApi:string;
  private postscheduledflightApi: string;
  private updatescheduledflightApi: string;
  private deletescheduledflightApi: string;
  
  constructor(private http:HttpClient) { 
    this.getAllScheduledFlightsApi = "http://localhost:8888/scheduledflight";
    this.getScheduledFlightByIdApi = "http://localhost:8888/scheduledflight/";
    this.postscheduledflightApi = "http://localhost:8888/scheduledflight";
    this.updatescheduledflightApi = "http://localhost:8888/scheduledflight";
    this.deletescheduledflightApi = "http://localhost:8888/scheduledflight/";
  }

  public getAllScheduledFlights():Observable<ScheduledFlight[]>{
    return this.http.get<ScheduledFlight[]>(this.getAllScheduledFlightsApi);
  }

  public getScheduledFlightById(sid:number): Observable<ScheduledFlight> {
    return this.http.get<ScheduledFlight>(this.getScheduledFlightByIdApi+sid);
  }
  public postScheduledflights(scheduledflight:ScheduledFlight): Observable<ScheduledFlight> {
    return this.http.post<ScheduledFlight>(this.postscheduledflightApi, scheduledflight);
  }
  public updateScheduledflights(scheduledflight: ScheduledFlight): Observable<ScheduledFlight> {
    return this.http.put<ScheduledFlight>(this.updatescheduledflightApi, scheduledflight);
  }

  public deleteScheduledflights(Id: number): Observable<ScheduledFlight> {
    return this.http.delete<ScheduledFlight>(this.deletescheduledflightApi + Id);
  }
}
