import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletescheduledflightComponent } from './deletescheduledflight.component';

describe('DeletescheduledflightComponent', () => {
  let component: DeletescheduledflightComponent;
  let fixture: ComponentFixture<DeletescheduledflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletescheduledflightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletescheduledflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
