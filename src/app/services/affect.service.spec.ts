import { TestBed } from '@angular/core/testing';

import { AffectService } from './affect.service';

describe('AffectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffectService = TestBed.get(AffectService);
    expect(service).toBeTruthy();
  });
});
