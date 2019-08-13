import { TestBed } from '@angular/core/testing';

import { MuzixService } from './muzix.service';

describe('MuzixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuzixService = TestBed.get(MuzixService);
    expect(service).toBeTruthy();
  });
});
