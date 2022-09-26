import { ScheduledFlight } from "./scheduledflight.model";

export interface Booking {
    bookingId?: number;
    bookingDate?: Date;
    noOfPassengers?: number;
    ticketCost?:number;
    scheduledFlight:ScheduledFlight;
}