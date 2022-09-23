import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    adminloggedIn = new BehaviorSubject<boolean>(false);
    customerloggedIn = new BehaviorSubject<boolean>(false);
    constructor() { }
}