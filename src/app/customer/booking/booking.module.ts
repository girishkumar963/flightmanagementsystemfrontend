import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';



@NgModule({
  declarations: [
    AddbookingComponent,
    UpdatebookingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookingModule { }
