import { TestBed } from '@angular/core/testing';

import { CRUDService } from './crud.service';

describe('CRUDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CRUDService = TestBed.get(CRUDService);
    expect(service).toBeTruthy();
  });
});
