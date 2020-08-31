import { TestBed } from '@angular/core/testing';

import { GitServicesService } from './git-services.service';

describe('GitServicesService', () => {
  let service: GitServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
