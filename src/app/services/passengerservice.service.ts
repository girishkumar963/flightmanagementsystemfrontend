import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Passenger } from '../models/passenger.model';

@Injectable({
  providedIn: 'root'
})
export class PassengerserviceService {

  postPassengerApi: string;
  getAllPassengersApi: string;
  getPassengerApi: string;
  updatePassengerApi: string;
  deletePassengerApi: string;

  constructor(private http: HttpClient) {
    this.postPassengerApi = "http://localhost:8888/passengers";
    this.getAllPassengersApi = "http://localhost:8888/passengers";
    this.getPassengerApi = "http://localhost:8888/passengers/";
    this.updatePassengerApi = "http://localhost:8888/passengers/";
    this.deletePassengerApi = "http://localhost:8888/passengers/";
  }

  public postPassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>(this.postPassengerApi, passenger)
  }

  public getAllPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.getAllPassengersApi);
  }

  public getPassenger(id: number): Observable<Passenger> {
    return this.http.get<Passenger>(this.getPassengerApi + id);
  }

  public updatePassenger(id: number, passenger: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(this.updatePassengerApi, passenger);
  }

  public deletePassenger(id: number): Observable<Passenger> {
    return this.http.delete<Passenger>(this.deletePassengerApi + id);
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
