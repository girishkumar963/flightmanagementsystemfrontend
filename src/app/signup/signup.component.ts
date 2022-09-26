import { Component, OnInit } from '@angular/core';
import { Router, UrlHandlingStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  uname: string;
  uphone: number;
  uemail: string;
  upassword: string;
  uconfirmpassword: string;
  uusertype: string;

  user: User = { "userId": null, "userName": "", "userPhone": null, "userEmail": "", "userPassword": "", "userType": "" }

  user1: Observable<User>;

  constructor(private router: Router, private userService: UserserviceService) { }

  ngOnInit(): void {
  }

  register() {
    if (this.user.userPassword != this.uconfirmpassword) {
      alert("Password and Confirm Password should be same");
    }
    else {
      console.log(this.user);
      this.user1 = this.userService.postUser(this.user);
      this.router.navigateByUrl("/customerlogin");
    }
  }

  login() {
    this.router.navigateByUrl("/customerlogin")
  }
}

