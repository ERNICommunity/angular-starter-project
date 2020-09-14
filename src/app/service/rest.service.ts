import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { PrenameRanking } from '../model/prename-ranking';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private httpClient: HttpClient) {}

  SERVICE_URL_PRENAMES = environment.baseUrlRestService + 'vornamen_proplz/exports/json';
  SERVICE_URL_SURNAMES = environment.baseUrlRestService + 'nachnamen_proplz/exports/json';

  public getDataPrenames(): Observable<any> {
    return this.httpClient.get<PrenameRanking>(this.SERVICE_URL_PRENAMES);
  }

  public getDataSurnames(): Observable<any> {
    return this.httpClient.get<any>(this.SERVICE_URL_SURNAMES);
  }
}
