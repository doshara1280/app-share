import { TestBed } from '@angular/core/testing';

import { WebappService } from './webapp.service';

describe('WebappService', () => {
  let service: WebappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
