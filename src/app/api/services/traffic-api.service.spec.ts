import { TestBed } from '@angular/core/testing';

import { TrafficApiService } from './traffic-api.service';

describe('TrafficApiService', () => {
  let service: TrafficApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
