import { Component, OnInit } from '@angular/core';
import {RestService} from "../service/rest.service";
import {take} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {PrenameRanking} from "../model/prename-ranking";

@Component({
  selector: 'app-rest-call',
  templateUrl: './rest-call.component.html',
  styleUrls: ['./rest-call.component.scss']
})
export class RestCallComponent implements OnInit {

  public isDataLoading: boolean;
  public dataLoadingError: boolean;

  public allPrenames: PrenameRanking[];
  public rank1Prenames: PrenameRanking[];
  public prenamesUrl: string;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.isDataLoading = true;
    this.dataLoadingError = false;
    this.prenamesUrl = this.restService.SERVICE_URL_PRENAMES;
    this.loadData();
  }

  private loadData(): void {
    this.restService.getDataPrenames().pipe(take(1))
      .subscribe(data => {
          // TODO: Handle data
          this.allPrenames = data;
          this.rank1Prenames = this.filterRank1Prenames(data);
          this.dataLoadingError = false;
          this.isDataLoading = false;
        },(err: HttpErrorResponse) => {
          this.dataLoadingError = true;
          this.isDataLoading = false;
        });
  }

  private filterRank1Prenames(completeList: PrenameRanking[]): PrenameRanking[] {
    return completeList.filter(p => p.rang === 1)
      .filter(p => p.ortbez18 != null)
      .sort((p1, p2) => this.sortPrenameRankingByVillageAndPostcode(p1, p2));
  }

  private sortPrenameRankingByVillageAndPostcode(p1: PrenameRanking, p2: PrenameRanking): number {
    let comparisonByVillage = p1.ortbez18.localeCompare(p2.ortbez18);
    if (comparisonByVillage === 0) {
      return p1.plz.localeCompare(p2.plz);
    }
    return comparisonByVillage;
  }
}
