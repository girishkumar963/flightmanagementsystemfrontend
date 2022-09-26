import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { CustomeruserModule } from '../customeruser/customeruser.module';
import { DeletebookingComponent } from './deletebooking/deletebooking.component';


@NgModule({
  declarations: [
    AddbookingComponent,
    UpdatebookingComponent,
    ViewbookingComponent,
    DeletebookingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddbookingComponent,
    UpdatebookingComponent,
    ViewbookingComponent,
    DeletebookingComponent
  ]
})
export class BookingModule { }
