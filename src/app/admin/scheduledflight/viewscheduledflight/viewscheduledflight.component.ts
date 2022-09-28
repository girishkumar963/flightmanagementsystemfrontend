import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduledFlight } from 'src/app/models/scheduledflight.model';
import { ScheduledflightserviceService } from 'src/app/services/scheduledflightservice.service';

@Component({
  selector: 'app-viewscheduledflight',
  templateUrl: './viewscheduledflight.component.html',
  styleUrls: ['./viewscheduledflight.component.css']
})
export class ViewscheduledflightComponent implements OnInit {


  scheduleFlights: Observable<ScheduledFlight[]>;

  constructor() { }

  ngOnInit(): void {


  }


}

