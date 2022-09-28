import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

  uid:number;
  constructor(private router:Router,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(params=>{
      this.uid=params.uid;
      
    })
  }
  addbooking=()=>{
    this.actRoute.params.subscribe(params => {
      this.uid = params.uid;
      this.router.navigateByUrl('/addbooking/' + this.uid);
    })
    
  }

  mydetails=()=>{
    this.router.navigateByUrl('/mydetails')
  }

  viewbooking = () => {
    this.actRoute.params.subscribe(params => {
      this.uid = params.uid;
      this.router.navigateByUrl('/viewbooking/' + this.uid);
    })
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
