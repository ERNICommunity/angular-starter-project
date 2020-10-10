import { TestBed } from '@angular/core/testing';

import { NamesRestHttpService } from './names-rest.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { PrenameRanking } from '../model/prename-ranking';

describe('NamesRestService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let namesResteService: NamesRestHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NamesRestHttpService],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    namesResteService = TestBed.inject(NamesRestHttpService);
  });

  afterEach(() => {
    // Verify that no requests are outstanding
    httpTestingController.verify();
  });

  it('should return expected prenames by calling once', () => {
    namesResteService
      .getDataPrenames()
      .subscribe((prenames) => expect(prenames).toEqual(getPrenames(), 'should return expected prenames'), fail);

    const req = httpTestingController.expectOne(namesResteService.SERVICE_URL_PRENAMES);
    expect(req.request.method).toEqual('GET');

    req.flush(getPrenames());
  });

  it('should correctly sort and filter the returned prenames', () => {
    namesResteService
      .getDataPrenamesSorted()
      .subscribe(
        (sortedPrenames) =>
          expect(sortedPrenames).toEqual(
            getSortedAndFilteredPrenames(),
            'should return expected sorted and filtered prenames',
          ),
        fail,
      );

    const req = httpTestingController.expectOne(namesResteService.SERVICE_URL_PRENAMES);
    req.flush(getPrenames());
  });

  function getPrenames(): PrenameRanking[] {
    return [
      {
        stichdatum: '2020-09-01',
        plz: '7430',
        vorname: 'Mario',
        anzahl: 29,
        geschlecht: 'm',
        rang: 3,
        ortbez18: 'Rongellen/Thusis',
      },
      {
        stichdatum: '2020-09-01',
        plz: '7433',
        vorname: 'Claudia',
        anzahl: 6,
        geschlecht: 'w',
        rang: 1,
        ortbez18: 'Donat/Lohn GR/Wergenstein/Mathon',
      },
      {
        stichdatum: '2020-09-01',
        plz: '7432',
        vorname: 'Barbara',
        anzahl: 14,
        geschlecht: 'w',
        rang: 1,
        ortbez18: 'Zillis',
      },
    ] as PrenameRanking[];
  }

  function getSortedAndFilteredPrenames(): PrenameRanking[] {
    return [
      {
        stichdatum: '2020-09-01',
        plz: '7433',
        vorname: 'Claudia',
        anzahl: 6,
        geschlecht: 'w',
        rang: 1,
        ortbez18: 'Donat/Lohn GR/Wergenstein/Mathon',
      },
      {
        stichdatum: '2020-09-01',
        plz: '7432',
        vorname: 'Barbara',
        anzahl: 14,
        geschlecht: 'w',
        rang: 1,
        ortbez18: 'Zillis',
      },
    ] as PrenameRanking[];
  }
});
