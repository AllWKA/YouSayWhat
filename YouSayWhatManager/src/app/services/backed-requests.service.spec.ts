import { TestBed } from '@angular/core/testing';

import { BackedRequestsService } from './backed-requests.service';

describe('BackedRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackedRequestsService = TestBed.get(BackedRequestsService);
    expect(service).toBeTruthy();
  });
});
