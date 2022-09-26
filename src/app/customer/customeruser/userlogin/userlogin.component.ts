import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  loginForm: FormGroup;
  // user:any;
  public users: User[];
  errorMsg: String;

  constructor(private router: Router, private userservice: UserserviceService, private appService: AppService) {
    
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
        customerId: new FormControl('Enter Valid Field', [Validators.required]),
        password: new FormControl('Enter Valid Field', [Validators.required, Validators.minLength(5)])
    })

    this.userservice.getUsers().subscribe((data) => {
      this.users = data;
    })
  }

  register() {
    this.router.navigateByUrl("/signup");
  }

  onFormSubmit = () => {
    let customerId = this.loginForm.value.customerId;
    let password = this.loginForm.value.password;

    let myprofile = this.users.find(a => (a.userId == customerId && a.userPassword == password && a.userType == "customer" || a.userType == "CUSTOMER"))
    if (myprofile) {
      localStorage.setItem("isCustomerLoggedIn", "true");
      let token = (customerId + ':' + password);
      localStorage.setItem("token", token);
      this.appService.customerloggedIn.next(true);
      this.router.navigateByUrl('customerhome/'+myprofile.userId)
    }
    else {
      this.errorMsg = 'Invalid Credentials';
    }
  }

}
