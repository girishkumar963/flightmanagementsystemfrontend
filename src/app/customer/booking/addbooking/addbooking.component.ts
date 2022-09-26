import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbooking',
  templateUrl: './addbooking.component.html',
  styleUrls: ['./addbooking.component.css']
})
export class AddbookingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  viewbooking=()=>{
    this.router.navigateByUrl('/viewbooking')
  }
}
