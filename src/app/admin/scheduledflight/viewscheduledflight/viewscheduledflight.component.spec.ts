import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewscheduledflightComponent } from './viewscheduledflight.component';

describe('ViewscheduledflightComponent', () => {
  let component: ViewscheduledflightComponent;
  let fixture: ComponentFixture<ViewscheduledflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewscheduledflightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewscheduledflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
