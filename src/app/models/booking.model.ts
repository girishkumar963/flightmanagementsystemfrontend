import { ScheduledFlight } from "./scheduledflight.model";
import { User } from "./user.model";

export interface Booking {
    bookingId?: number;
    bookingDate?: string;
    noOfPassengers?: number;
    ticketCost?:number;
    user?:User;
    scheduledFlight:ScheduledFlight;
}