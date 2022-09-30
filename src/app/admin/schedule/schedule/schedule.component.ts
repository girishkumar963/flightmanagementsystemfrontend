import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/models/schedule.model';
import {FormBuilder,FormGroup,FormControl} from '@angular/forms'
import { ScheduleserviceService } from 'src/app/services/scheduleservice.service'; 
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  message:any;
  schedules: Schedule[];
  public deleteSchedule?: Schedule;
  schedule:Schedule=new Schedule();
  
  scheduleId: number;
  constructor(private scheduleService:ScheduleserviceService,private fb:FormBuilder) { }
    

  


  ngOnInit(): void {
    this.getSchedules();
  }

  scheduleToUpdate={
    scheduleId:1,
    srcAirport:"",
    dstnAirport:"",
    deptDateTime:"",
    arrDateTime:""
  };

  public getSchedules(){
    this.scheduleService.getSchedules().subscribe(response=>{
      this.schedules=response;
    });

  }

  onSubmit(){
    console.log(this.schedule);
    this.addSchedule();
  }
  addSchedule(){
    this.scheduleService.postSchedule(this.schedule).subscribe((data)=>{console.log(data);
    alert("Schedule added successfully");
    
    this.getSchedules();
  },
  (error)=>{console.log(error);
  alert("schedule is not added ");}
  );
  }



  delete(scheduleId: number){
    this.scheduleService.deleteSchedule(scheduleId).subscribe( response => {
      console.log(response);
      this.getSchedules();
    });
  }

 
  
  
  
  update(schedule:any)
  {
    this.scheduleToUpdate=schedule;
      
  }
  
  updateSchedule(){
    // this.scheduleService.updateSchedule(this.scheduleToUpdate.scheduleId).subscribe(
    //  (response)=>{
    //   console.log(response);
    //   this.getSchedules();
    //  }, 
    //  (error)=>{
    //   console.log(error);
    //  }
    //  );
  }
  
  
   viewSchedule(scheduleId:number){
    this.scheduleService.getSchedulesById(scheduleId).subscribe((response)=>{
        this.schedule=response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
        alert("Schedule does not exist")
       }
      );


  
  //title = 'schedule-module';

      }

    } 


