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
    return this.http.delete(this.deleteBookingApi+bid).pipe(catchError(this.handleError));
  }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

}
