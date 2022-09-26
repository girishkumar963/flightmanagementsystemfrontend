import { Booking } from "./booking.model";

export interface Passenger{
    passId?:number;
    pnrNumber?:number;
    passengerName?:string;
    passengerAge?:number;
    gender?:string;
    passengerUIN?:number;
    luggage?:number;
    booking?:Booking;
}