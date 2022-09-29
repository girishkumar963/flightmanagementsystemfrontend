import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduledFlight } from 'src/app/models/scheduledflight.model';
import { ScheduledflightserviceService } from 'src/app/services/scheduledflightservice.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-addscheduledflight',
  templateUrl: './addscheduledflight.component.html',
  styleUrls: ['./addscheduledflight.component.css']
})
export class AddscheduledflightComponent implements OnInit {

  scheduledflight: ScheduledFlight;
  addscheduledflightform: FormGroup;
  constructor(private router: Router, private scheduledflightservice: ScheduledflightserviceService) { }

  ngOnInit(): void {

    this.addscheduledflightform = new FormGroup({
      scheduledflightId: new FormControl(),
      avaliableseats: new FormControl(),
      ticketcost: new FormControl(),
      scheduleId: new FormControl()
    });

  }

  onSubmit() {
    this.scheduledflight = {
      scheduleFlightId: this.addscheduledflightform.value.scheduledFlightId,
      availableSeats: this.addscheduledflightform.value.avaliableSeats,
      ticketCost: this.addscheduledflightform.value.ticketcost,
      schedule: this.addscheduledflightform.value.scheduleId,
    }

    this.scheduledflightservice.postScheduledflights(this.scheduledflight).subscribe(data=>{
      this.scheduledflight =data;
    })
    alert("ScheduledFLight added");
    this.router.navigateByUrl('');
  }


}

