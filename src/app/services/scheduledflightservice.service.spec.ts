import { TestBed } from '@angular/core/testing';

import { ScheduledflightserviceService } from './scheduledflightservice.service';

describe('ScheduledflightserviceService', () => {
  let service: ScheduledflightserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledflightserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
