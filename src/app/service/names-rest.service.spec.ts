import { TestBed } from '@angular/core/testing';

import { NamesRestHttpService } from './names-rest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NamesRestService', () => {
  let service: NamesRestHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NamesRestHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
