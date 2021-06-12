import { TestBed } from '@angular/core/testing';

import { LoginsatusService } from './loginsatus.service';

describe('LoginsatusService', () => {
  let service: LoginsatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginsatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
