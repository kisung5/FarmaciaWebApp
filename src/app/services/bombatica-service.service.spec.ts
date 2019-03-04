import { TestBed } from '@angular/core/testing';

import { BombaticaServiceService } from './bombatica-service.service';

describe('BombaticaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BombaticaServiceService = TestBed.get(BombaticaServiceService);
    expect(service).toBeTruthy();
  });
});
