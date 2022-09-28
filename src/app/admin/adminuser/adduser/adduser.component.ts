import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  uname: string;
  uphone: number;
  uemail: string;
  upassword: string;
  uconfirmpassword: string;
  uusertype: string;

  user: User = { "userId": null, "userName": "", "userPhone": null, "userEmail": "", "userPassword": "", "userType": "" }

  user1: User;

  constructor(private router: Router, private userService: UserserviceService) { }

  ngOnInit(): void {
  }

  register(form: any) {
    console.log(this.user);
    this.userService.postUser(this.user).subscribe(data => {
      this.user1 = data;
      alert("User Registered Successfully.....");
      alert("UserName is : " + this.user1.userId);
    });
    this.router.navigateByUrl("/adminhome")
  }

}

