import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyComponent } from './consultancy.component';

describe('ConsultancyComponent', () => {
  let component: ConsultancyComponent;
  let fixture: ComponentFixture<ConsultancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
