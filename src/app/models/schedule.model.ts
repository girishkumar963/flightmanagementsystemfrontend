import { Airport } from "./airport.model";

export interface Schedule{
    scheduleId?:number;
    srcAirport?:Airport;
    dstnAirport?:Airport;
    deptDateTime?:Date;
    arrDateTime?:Date;
}