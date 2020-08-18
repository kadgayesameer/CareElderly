import { TestBed } from '@angular/core/testing';

import { HardcodedAuthenticationServiceService } from './hardcoded-authentication-service.service';

describe('HardcodedAuthenticationServiceService', () => {
  let service: HardcodedAuthenticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthenticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
