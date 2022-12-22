import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledAppoinmentsComponent } from './scheduled-appoinments.component';

describe('ScheduledAppoinmentsComponent', () => {
  let component: ScheduledAppoinmentsComponent;
  let fixture: ComponentFixture<ScheduledAppoinmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduledAppoinmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledAppoinmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
