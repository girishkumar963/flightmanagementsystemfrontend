import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  loginForm: FormGroup;
  public users: User[];
  errorMsg: String;

  constructor(private router: Router, private userservice: UserserviceService, private appService: AppService) {
    this.loginForm = new FormGroup(
      {
        customerEmail: new FormControl('',[Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      }
    )
  }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe((data) => {
      this.users = data;
    })
  }

  register() {
    this.router.navigateByUrl("/signup");
  }

  onFormSubmit = () => {
    let customerEmail = this.loginForm.value.customerEmail;
    let password = this.loginForm.value.password;

    let myprofile = this.users.find(a => (a.userEmail == customerEmail && a.userPassword == password && a.userType == "customer" || a.userType == "CUSTOMER"))
    if (myprofile) {
      localStorage.setItem("isCustomerLoggedIn", "true");
      let token = (customerEmail + ':' + password);
      localStorage.setItem("token", token);
      this.appService.customerloggedIn.next(true);
      this.router.navigateByUrl('customerhome/' + myprofile.userId)
    }
    else {
      this.errorMsg = 'Invalid Credentials';
    }
  }

}
