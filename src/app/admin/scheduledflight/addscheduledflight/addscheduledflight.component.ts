// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ScheduledFlight } from 'src/app/models/scheduledflight.model';
// import { ScheduledflightserviceService } from 'src/app/services/scheduledflightservice.service';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-addscheduledflight',
//   templateUrl: './addscheduledflight.component.html',
//   styleUrls: ['./addscheduledflight.component.css']
// })
// export class AddscheduledflightComponent implements OnInit {

//   srcAirport: string;
//   dstnAirport: string;
//   deptDateTime: string;
//   arrDateTime: string;


//   scheduleFlight: ScheduledFlight = { scheduleFlightId: null, availableSeats: null, flight: null, schedule: null };

//   constructor(private scheduleFlightService: ScheduledflightserviceService, private router: Router, private route: ActivatedRoute) {

//   }

//   ngOnInit(): void {
//   }

//   addScheduleFlight(scheduleFlight, sa, da, ddt, adt) {
//     // alert(sa+da+ ddt+ adt);
//     this.srcAirport = sa;
//     this.dstnAirport = da;
//     this.deptDateTime = ddt;
//     this.arrDateTime = adt;
//     this.scheduleFlightService.postScheduledflights(scheduleFlight, sa, da, ddt, adt).subscribe();
//     alert("Schedule Flight added");
//   }

//   idValid: boolean = false;
//   validateId() {
//     if (this.scheduleFlight.scheduleFlightId > 999) {
//       this.idValid = true;
//     }
//     else if (this.scheduleFlight.scheduleFlightId < 1) {
//       this.idValid = true;
//     } else {
//       this.idValid = false;
//     }
//   }

//   airportValid: boolean = false;
//   validateAirports(a: string, b: string) {
//     if (a.toLowerCase() === b.toLowerCase()) {
//       this.airportValid = true;
//     } else {
//       this.airportValid = false;
//     }
//     this.enableButton();
//   }

//   buttonFlag: boolean = false;
//   enableButton() {
//     this.buttonFlag = !this.idValid && !this.airportValid;
//   }

//   add() {

//     this.router.navigate(['/scheduledFlight/add']);

//   }

//   view() {

//     this.router.navigate(['/scheduledFlight/show']);

//   }

//   search() {

//     this.router.navigate(['/scheduledFlight/search']);

//   }
// }
