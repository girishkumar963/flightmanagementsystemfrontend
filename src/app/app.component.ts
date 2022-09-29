import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  userEmail:string;
  constructor(private appService: AppService, private userService: UserserviceService,private router:Router,private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.userArray = data;
      this.loginArray = this.userArray;
    })

    let token = localStorage.getItem('token');
    // token = atob(token);
    if(token!=null){
    this.userId = token.split(':')[0];
    this.password = token.split(':')[1];
    }
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
    let token = localStorage.getItem('token');
    if (token != null) {
      this.userEmail = token.split(':')[0];
      this.password = token.split(':')[1];
      this.userService.getUsers().subscribe(data => {
        console.log(this.userEmail+this.password)
        this.userArray = data;
        this.loginArray = this.userArray;
        this.custId = this.userArray.find(e => e.userEmail === this.userEmail && e.userPassword === this.password).userId;
        console.log(this.custId)
        this.router.navigateByUrl('/customerhome/' + this.custId)
      })
    }
    else{
    console.log(this.custId)
    this.router.navigateByUrl('/customerhome/'+this.custId)
    }
  }
  adminlogin(){
    this.router.navigateByUrl('/adminlogin')
  }
  adminhome(){
    this.router.navigateByUrl('/adminhome')
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
