import { TestBed } from '@angular/core/testing';

import { UrlManageServiceService } from './url-manage-service.service';

describe('UrlManageServiceService', () => {
  let service: UrlManageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlManageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
