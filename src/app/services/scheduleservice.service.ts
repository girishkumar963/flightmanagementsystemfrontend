import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleserviceService {
  httpClient: any;
  private apiServerUrl = 'http://localhost:8888/schedules';
  constructor(private http: HttpClient) { }

  /*
    postSchedule(data : any){
      return this.http.post<any>("http://localhost:3000/scheduleList/",data);
    }
    
    
    putSchedule(data:any,id:number){
     return this.http.put<any>("http://localhost:3000/scheduleList/"+id,data)
    }
    deleteSchedule(id:number){
      return this.http.delete<any>("http://localhost:3000/scheduleList/"+id)
    }*/
  /*
    public postSchedules(schedule:any){
      return this.http.post("http://localhost:8888/schedules",schedule);
    }
    public getSchedules(){
      return this.http.get<any>("http://localhost:8888/schedules");
    }
  
    public getScheduleById( scheduleId:number){
      return this.http.get("http://localhost:8888/schedules/"+scheduleId);
    }
  
    putSchedule(data:any,scheduleId:number){
      return this.http.put<any>("http://localhost:8888/schedules/"+scheduleId,data)
     }
    public deleteSchedule(scheduleId:number){
      return this.http.delete("http://localhost:8888/schedules/"+scheduleId);
    }
    
  */
  public getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(`${this.apiServerUrl}`);
  }
  public getSchedulesById(scheduleId: number): Observable<Schedule> {
    return this.http.get<Schedule>(this.apiServerUrl + "/" + scheduleId);
  }
  public postSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.apiServerUrl, schedule);
  }
  public updateSchedule(schedule: Schedule, scheduleId: number): Observable<Schedule> {
    return this.http.put<Schedule>(this.apiServerUrl + "/" + scheduleId, schedule);
  }
  public deleteSchedule(scheduleId: number): Observable<void> {
    return this.http.delete<void>(this.apiServerUrl + "/" + scheduleId);
  }
}
