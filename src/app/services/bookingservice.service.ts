import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';
import { Booking } from '../models/booking.model';
@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {

  private getAllBookingsApi:string;
  private getBookingByBookingIdApi:string;
  private getBookingByUserIdApi:string;
  private postBookingApi:string;
  private updateBookingApi:string;
  private deleteBookingApi:string;

  constructor(private http:HttpClient) {
    this.getAllBookingsApi = "http://localhost:8888/bookings";
    this.getBookingByBookingIdApi = "http://localhost:8888/bookings/";
    this.getBookingByUserIdApi = "http://localhost:8888/user/bookings/";
    this.postBookingApi = "http://localhost:8888/bookings";
    this.updateBookingApi = "http://localhost:8888/bookings";
    this.deleteBookingApi = "http://localhost:8888/bookings/";
  }

  public getAllBookings():Observable<Booking[]>{
    return this.http.get<Booking[]>(this.getAllBookingsApi);
  }

  public getBookinByBookingId(bid:number):Observable<Booking>{
    return this.http.get<Booking>(this.getBookingByBookingIdApi+bid);
  }

  public getBookingByUserId(bid:number):Observable<Booking[]>{
    return this.http.get<Booking[]>(this.getBookingByUserIdApi+bid);
  }

  public postBooking(booking:Booking):Observable<Booking>{
    return this.http.post<Booking>(this.postBookingApi,booking);
  }

  public updateBooking(booking:Booking):Observable<Booking>{
    return this.http.put<Booking>(this.updateBookingApi,booking);
  }

  public deleteBooking(bid:number):Observable<{}>{
    return this.http.delete(this.deleteBookingApi+bid);
  }


  
}
