import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {PrenameRanking} from '../model/prename-ranking';
import {catchError, filter, finalize, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class NamesRestHttpService {
  public prenamesLoading = true;
  public prenameLoadingError = false;

  constructor(private httpClient: HttpClient) {
  }

  readonly SERVICE_URL_PRENAMES = environment.baseUrlRestService + 'vornamen_proplz/exports/json';
  readonly SERVICE_URL_SURNAMES = environment.baseUrlRestService + 'nachnamen_proplz/exports/json';

  public getDataPrenames(): Observable<PrenameRanking[]> {
    this.prenamesLoading = true;
    this.prenameLoadingError = false;

    return this.httpClient.get<PrenameRanking[]>(this.SERVICE_URL_PRENAMES)
      .pipe(
        catchError(err => {
          this.prenameLoadingError = true;
          return of([]);
        }),
        finalize(() => {
          this.prenamesLoading = false;
        })
      );
  }

  public getDataPrenamesSorted(): Observable<PrenameRanking[]> {
    return this.getDataPrenames()
      .pipe(
        map(
          prenameRankings => prenameRankings.filter(ranking => ranking.rang === 1)
        ),
        map(
          prenameRankings => prenameRankings.filter(ranking => ranking.ortbez18 != null)
        ),
        map(
          prenameRankings => prenameRankings.sort(
            (r1, r2) => this.sortPrenameRankingByVillageAndPostcode(r1, r2)
          )
        )
      );
  }

  public getDataSurnames(): Observable<any> {
    return this.httpClient.get<any>(this.SERVICE_URL_SURNAMES);
  }

  private sortPrenameRankingByVillageAndPostcode(p1: PrenameRanking, p2: PrenameRanking): number {
    let comparisonByVillage = p1.ortbez18.localeCompare(p2.ortbez18);
    if (comparisonByVillage === 0) {
      return p1.plz.localeCompare(p2.plz);
    }
    return comparisonByVillage;
  }
}
