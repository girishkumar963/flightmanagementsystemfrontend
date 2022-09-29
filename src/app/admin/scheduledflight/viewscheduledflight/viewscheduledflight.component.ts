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

  scheduledFlightId: number;
  scheduledFlights: Observable<ScheduledFlight[]>;
  scheduledflight: ScheduledFlight;



  constructor(private scheduledflightsevice: ScheduledflightserviceService, private router: Router) { }

  ngOnInit(): void {

    this.reloadData();
    this.scheduledflightsevice.getScheduledFlightById(this.scheduledFlightId).subscribe(data => {
      this.scheduledflight = data;
    })


  }
  reloadData() {
    this.scheduledFlights = this.scheduledflightsevice.getAllScheduledFlights();
  }

  viewFullDetails = () => {

  }
  updateDetails = () => {
    this.router.navigateByUrl('/updatescheduledflights')
  }
  deletescheduledflight(scheduledFlightId: number) {
    this.scheduledflightsevice.deleteScheduledflights(scheduledFlightId).subscribe(data => {
      console.log(data);
      this.reloadData();
    },
      error => console.log(error)
    );
  }

}

