import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  uconfirmpassword: any;
  uusertype: string;

  user: User = { "userId": null, "userName": "", "userPhone": null, "userEmail": "", "userPassword": "", "userType": "" }

  user1: User;

  constructor(private router: Router, private userService: UserserviceService) {
  }

  ngOnInit(): void {
  }

  register(data: any) {
    console.log(this.user);
    this.userService.postUser(this.user).subscribe(data => {
      this.user1 = data;
      console.log(this.user1);
      alert("Registered Successfully........");
      alert("User ID is :" + this.user1.userId);
    });
    this.router.navigateByUrl("/customerlogin");
  }

  login() {
    this.router.navigateByUrl("/customerlogin")
  }


}
