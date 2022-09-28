import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepassengerComponent } from './deletepassenger.component';

describe('DeletepassengerComponent', () => {
  let component: DeletepassengerComponent;
  let fixture: ComponentFixture<DeletepassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletepassengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletepassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
