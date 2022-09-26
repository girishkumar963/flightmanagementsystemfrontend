import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { User } from './models/user.model';
import { UserserviceService } from './services/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loggedIn: boolean;
  customerloggedIn: boolean;
  userId: any;
  password: any;
  userArray: User[];
  loginArray: User[];
  custId: number;
  custName:string;
  constructor(private appService: AppService, private userService: UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.userArray = data;
      this.loginArray = this.userArray;
    })
    let token = localStorage.getItem('specialId');
    token = atob(token);
    this.userId = token.split(':')[0];
    this.password = token.split(':')[1];
    this.appService.loggedIn.subscribe(data => {

      let status = localStorage.getItem('isLoggedIn');
      if (status) {
        this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }
    });
    this.appService.customerloggedIn.subscribe(data => {

      let status = localStorage.getItem('isCustomerLoggedIn');
      if (status) {
        this.customerloggedIn = true;
      }
      else {
        this.customerloggedIn = false;
      }
    });
  }

  getCustomerId() {
    this.custId = this.userArray.find(e => e.userId === this.userId && e.userPassword === this.password).userId;
    this.custName = this.userArray.find(e => e.userId === this.userId && e.userPassword === this.password).userName;
  }
  customerlogin=()=>{
    this.router.navigateByUrl('/customerlogin');
  }
  customerhome=()=>{
    
    this.router.navigateByUrl('/customerhome/'+this.custId)
  }
  onLogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.loggedIn = false;
    localStorage.removeItem('specialId');
    localStorage.removeItem('isCustomerLoggedIn');
    this.customerloggedIn = false;
    this.router.navigateByUrl('/')
  }
}
