import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddscheduledflightComponent } from './addscheduledflight/addscheduledflight.component';
import { UpdatescheduledflightComponent } from './updatescheduledflight/updatescheduledflight.component';
import { DeletescheduledflightComponent } from './deletescheduledflight/deletescheduledflight.component';
import { ViewscheduledflightComponent } from './viewscheduledflight/viewscheduledflight.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddscheduledflightComponent,
    UpdatescheduledflightComponent,
    DeletescheduledflightComponent,
    ViewscheduledflightComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports : [
    AddscheduledflightComponent,
    ViewscheduledflightComponent,
    DeletescheduledflightComponent,
    UpdatescheduledflightComponent
  ]
})
export class ScheduledflightModule { }
