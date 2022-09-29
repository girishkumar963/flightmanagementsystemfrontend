import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ScheduledflightserviceService } from 'src/app/services/scheduledflightservice.service';
import { scheduled } from 'rxjs';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { ScheduledFlight } from 'src/app/models/scheduledflight.model';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-updatescheduledflight',
  templateUrl: './updatescheduledflight.component.html',
  styleUrls: ['./updatescheduledflight.component.css']
})
export class UpdatescheduledflightComponent implements OnInit {
  scheduledflightId: number;
  scheduleflight: ScheduledFlight;
  updateForm: FormGroup;
  updatedscheduledflight: ScheduledFlight;
  constructor(private scheduldeflightService: ScheduledflightserviceService, private router: Router) { }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      scheduledflightId: new FormControl(''),
      avaliableSeats: new FormControl(''),
      ticketcost: new FormControl(''),
      scheduled: new FormControl()

    })

  }
  onUpdateClick() {
    this.updatedscheduledflight = {
      scheduleFlightId: this.updateForm.value.scheduledFlightId,
      availableSeats: this.updateForm.value.avaliableseats,
      ticketCost: this.updateForm.value.ticketcost,
      schedule: this.updateForm.value.schedule

    };
    this.scheduldeflightService.updateScheduledflights(this.updatedscheduledflight).subscribe(data => { this.scheduleflight = data; });


    alert("ScheduledFlight updated");
    this.router.navigateByUrl('');
  }



  getUpdateFormControl() {
    return this.updateForm.controls;
  }
}

