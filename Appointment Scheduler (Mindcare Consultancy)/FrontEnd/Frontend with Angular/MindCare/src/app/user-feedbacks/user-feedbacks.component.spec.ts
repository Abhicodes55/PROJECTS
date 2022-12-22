import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedbacksComponent } from './user-feedbacks.component';

describe('UserFeedbacksComponent', () => {
  let component: UserFeedbacksComponent;
  let fixture: ComponentFixture<UserFeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFeedbacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
