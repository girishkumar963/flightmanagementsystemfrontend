import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addpassengerComponent } from './addpassenger/addpassenger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatepassengerComponent } from './updatepassenger/updatepassenger.component';
import { ViewpassengerComponent } from './viewpassenger/viewpassenger.component';
import { DeletepassengerComponent } from './deletepassenger/deletepassenger.component';



@NgModule({
  declarations: [
    addpassengerComponent,
    UpdatepassengerComponent,
    ViewpassengerComponent,
    DeletepassengerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PassengerModule { }
