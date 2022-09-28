import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddscheduledflightComponent } from './addscheduledflight.component';

describe('AddscheduledflightComponent', () => {
  let component: AddscheduledflightComponent;
  let fixture: ComponentFixture<AddscheduledflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddscheduledflightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddscheduledflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
