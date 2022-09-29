import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Schedule } from 'src/app/models/schedule.model';
import { ScheduleserviceService } from 'src/app/services/scheduleservice.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  // scheduleForm !: FormGroup;
  // currentDate: any = new Date();
  // schedules: any;
  // schedule: Schedule
  // actionBtn: string = "Save";
  // constructor(private formBuilder: FormBuilder, private api: ScheduleserviceService) { }
  ngOnInit(): void {
    
  }
  // /*
  //     airports : sourceAirport[]=[
  //      {value:'Chatrapati Shivaji,Mumbai',viewValue: 'Chatrapati Shivaji,Mumbai'},
  //       {value:'Indira Gandhi,Delhi',viewValue:'Indira Gandhi,Delhi'},
  //       {value:'Banglore Terminal,Banglore',viewValue:'Banglore Terminal,Banglore'},
  //       {value:'Chennai International Airport, Chennai',viewValue:'Chennai International Airport'},
  //       {value:'Kozhikode Airport, Calicut',viewValue:'Kozhikode Airport, Calicut'},
  //       {value:'Cochin International Airport, Kochi',viewValue:'Cochin International Airport, Kochi'}
  //     ];
  //     airport : destinationAirport[]=[
  //       {value:'Chatrapati Shivaji,Mumbai',viewValue: 'Chatrapati Shivaji,Mumbai'},
  //        {value:'Indira Gandhi,Delhi',viewValue:'Indira Gandhi,Delhi'},
  //        {value:'Banglore Terminal,Banglore',viewValue:'Banglore Terminal,Banglore'},
  //        {value:'Chennai International Airport, Chennai',viewValue:'Chennai International Airport'},
  //        {value:'Kozhikode Airport, Calicut',viewValue:'Kozhikode Airport, Calicut'},
  //        {value:'Cochin International Airport, Kochi',viewValue:'Cochin International Airport, Kochi'}
  //      ];
  //      */
  // ngOnInit(): void {

  //   this.scheduleForm = this.formBuilder.group({
  //     scheduleId: ['', Validators.required],
  //     srcAirport: ['', Validators.required],
  //     dstnAirport: ['', Validators.required],
  //     deptTime: ['', Validators.required],
  //     arrTime: ['', Validators.required]
  //   })
  //   {
  //     this.actionBtn = "Update";
  //     this.scheduleForm.controls['scheduleId'].setValue(this.editData.scheduleId);
  //     this.scheduleForm.controls['srcAirport'].setValue(this.editData.srcAirport);
  //     this.scheduleForm.controls['dstnAirport'].setValue(this.editData.deptAirport);
  //     this.scheduleForm.controls['deptTime'].setValue(this.editData.deptTime);
  //     this.scheduleForm.controls['arrTime'].setValue(this.editData.arrTime);
  //   }

  // }
  // addSchedule() {
  //   if (!this.editData) {
  //     if (this.scheduleForm.valid) {
  //       this.api.getSchedules()
  //         .subscribe({
  //           next: (res: any) => {
  //             alert("Schedule added Successfully");
  //             this.scheduleForm.reset();
  //             this.dialogRef.close('save');
  //           },
  //           error: () => {
  //             alert("Error while adding the schedule")
  //           }
  //         })
  //     }
  //   }
  //   else {
  //     this.updateSchedule();
  //   }

  // }
  // updateSchedule() {
  //   this.api.updateSchedule(this.scheduleForm.value, this.editData.scheduleId)
  //     .subscribe({
  //       next: (res) => {
  //         alert("Schedule Updated Successfully");
  //         this.scheduleForm.reset();
  //         this.dialogRef.close('update')
  //       },
  //       error: () => {
  //         alert("Error while updating the record..!!");
  //       }
  //     })
  // }


}
