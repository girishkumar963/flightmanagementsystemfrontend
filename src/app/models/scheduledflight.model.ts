import { Flight } from "./flight.model";
import { Schedule } from "./schedule.model";

export interface ScheduledFlight{
    scheduleFlightId?:number;
    flight?:Flight;
    availableSeats?:number;
    ticketCost?:number;
    schedule?:Schedule
}