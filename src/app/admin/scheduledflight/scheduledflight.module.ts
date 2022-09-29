import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddscheduledflightComponent } from './addscheduledflight/addscheduledflight.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeletescheduledflightComponent } from './deletescheduledflight/deletescheduledflight.component';
import { UpdatescheduledflightComponent } from './updatescheduledflight/updatescheduledflight.component';
import { ViewscheduledflightComponent } from './viewscheduledflight/viewscheduledflight.component';
@NgModule({
  declarations: [
    AddscheduledflightComponent,
    DeletescheduledflightComponent,
    UpdatescheduledflightComponent,
    ViewscheduledflightComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ScheduledflightModule { }
