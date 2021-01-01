import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { PrenameRanking } from '../model/prename-ranking';

@Injectable({
  providedIn: 'root',
})
export class NamesRestHttpService {
  public prenamesLoading = true;
  public prenameLoadingError = false;

  constructor(private httpClient: HttpClient) {}

  readonly SERVICE_URL_PRENAMES = `${environment.baseUrlRestService}vornamen_proplz/exports/json`;

  private static sortPrenameRankingByVillageAndPostcode(p1: PrenameRanking, p2: PrenameRanking): number {
    const comparisonByVillage = p1.ortbez18.localeCompare(p2.ortbez18);
    if (comparisonByVillage === 0) {
      return p1.plz.localeCompare(p2.plz);
    }
    return comparisonByVillage;
  }

  public getDataPrenames(): Observable<PrenameRanking[]> {
    this.prenamesLoading = true;
    this.prenameLoadingError = false;

    return this.httpClient.get<PrenameRanking[]>(this.SERVICE_URL_PRENAMES).pipe(
      catchError(() => {
        this.prenameLoadingError = true;
        return of([]);
      }),
      finalize(() => {
        this.prenamesLoading = false;
      }),
    ) as Observable<PrenameRanking[]>;
  }

  public getDataPrenamesSorted(): Observable<PrenameRanking[]> {
    return this.getDataPrenames().pipe(
      map((prenameRankings) => prenameRankings.filter((ranking) => ranking.rang === 1)),
      map((prenameRankings) => prenameRankings.filter((ranking) => ranking.ortbez18 != null)),
      map((prenameRankings) =>
        prenameRankings.sort((r1, r2) => NamesRestHttpService.sortPrenameRankingByVillageAndPostcode(r1, r2)),
      ),
    );
  }
}
