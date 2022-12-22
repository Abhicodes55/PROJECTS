import { TestBed } from '@angular/core/testing';

import { AppoinmentServiceService } from './appoinment-service.service';

describe('AppoinmentServiceService', () => {
  let service: AppoinmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppoinmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
