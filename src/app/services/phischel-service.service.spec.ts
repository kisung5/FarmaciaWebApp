import { TestBed } from '@angular/core/testing';

import { PhischelServiceService } from './phischel-service.service';

describe('PhischelServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhischelServiceService = TestBed.get(PhischelServiceService);
    expect(service).toBeTruthy();
  });
});
