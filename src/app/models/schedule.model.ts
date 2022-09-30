import { Airport } from "./airport.model";

export class Schedule{
    scheduleId?:number;
    srcAirport?:Airport;
    dstnAirport?:Airport;
    deptDateTime?:Date;
    arrDateTime?:Date;
}