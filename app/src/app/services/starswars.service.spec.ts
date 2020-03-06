import { TestBed } from '@angular/core/testing';

import { StarswarsService } from './starswars.service';

describe('StarswarsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarswarsService = TestBed.get(StarswarsService);
    expect(service).toBeTruthy();
  });
});
