import { TestBed } from '@angular/core/testing';

import { MockUserServiceService } from './mock-user-service.service';

describe('MockUserServiceService', () => {
  let service: MockUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
