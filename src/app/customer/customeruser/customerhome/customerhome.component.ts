import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

  bid:number;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.bid = 801
  }
  addbooking=()=>{
    this.router.navigateByUrl('/addbooking')
  }

  mydetails=()=>{
    this.router.navigateByUrl('/mydetails')
  }

  viewbooking = () => {
    this.router.navigateByUrl('/viewbooking/'+this.bid);
  }
  updatebooking = () => {
    this.router.navigateByUrl('/updatebooking')
  }
  deletebooking = () => {
    this.router.navigateByUrl('/deletebooking')
  }
  updatemydetails = () => {
    this.router.navigateByUrl('/')
  }
  viewflights = () =>{
    this.router.navigateByUrl('/')
  }

}
