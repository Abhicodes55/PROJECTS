import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrComponent } from './add-dr.component';

describe('AddDrComponent', () => {
  let component: AddDrComponent;
  let fixture: ComponentFixture<AddDrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
