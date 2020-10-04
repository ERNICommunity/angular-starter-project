import { TestBed } from '@angular/core/testing';

import { NamesRestHttpService } from './names-rest.service';

describe('NamesRestService', () => {
  let service: NamesRestHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamesRestHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
