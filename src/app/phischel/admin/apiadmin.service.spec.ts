import { TestBed } from '@angular/core/testing';

import { ApiadminService } from './apiadmin.service';

describe('ApiadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiadminService = TestBed.get(ApiadminService);
    expect(service).toBeTruthy();
  });
});
