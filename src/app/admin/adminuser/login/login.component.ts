import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  admin: any;
  public users: User[];
  errorMsg: String;

  constructor(private router: Router, private userservice: UserserviceService, private appService: AppService) {
    this.loginForm = new FormGroup(
      {
        adminEmail: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      }
    )
  }

  ngOnInit(): void {
    // this.admin=this.userservice.getUsers();
    this.userservice.getUsers().subscribe((data) => {
      this.users = data;
    })
  }

  onFormSubmit = () => {
    let adminEmail = this.loginForm.value.adminEmail;
    let password = this.loginForm.value.password;

    let myadmin = this.users.find(a => (a.userEmail == adminEmail && a.userPassword == password && a.userType == "admin" || a.userType == "ADMIN"))
    if (myadmin) {
      localStorage.setItem("isLoggedIn", "true");
      let token = (adminEmail + ':' + password);
      localStorage.setItem("token", token);
      this.appService.loggedIn.next(true);
      this.router.navigateByUrl('adminhome')
    }
    else {
      this.errorMsg = 'Invalid Credentials';
    }
  }

}
