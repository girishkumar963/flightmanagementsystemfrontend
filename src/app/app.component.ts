import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightManagementSystemFrontend';
  loggedIn: boolean;
  customerloggedIn: boolean;
  useremail: any;
  password: any;
}
