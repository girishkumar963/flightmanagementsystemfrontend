import { TestBed } from '@angular/core/testing';

import { AirportserviceService } from './airportservice.service';

describe('AirportserviceService', () => {
  let service: AirportserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirportserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
