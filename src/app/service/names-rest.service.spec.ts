import { TestBed } from '@angular/core/testing';

import { NamesRestService } from './names-rest.service';

describe('NamesRestService', () => {
  let service: NamesRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamesRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
