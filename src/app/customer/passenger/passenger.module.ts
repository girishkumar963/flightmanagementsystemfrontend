import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';



@NgModule({
  declarations: [
    AddpassengerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddpassengerComponent
  ]
})
export class PassengerModule { }
