import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AirportlistComponent } from './airportlist/airportlist.component';
import { ViewairportComponent } from './viewairport/viewairport.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AirportlistComponent,
    ViewairportComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AirportlistComponent,
    ViewairportComponent
  ]
})
export class AirportModule { }
