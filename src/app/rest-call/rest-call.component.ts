import { Component, OnInit } from '@angular/core';
import {RestService} from "../service/rest.service";
import {take} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-rest-call',
  templateUrl: './rest-call.component.html',
  styleUrls: ['./rest-call.component.scss']
})
export class RestCallComponent implements OnInit {

  public isDataLoading: boolean;
  public dataLoadingError: boolean;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.isDataLoading = true;
    this.dataLoadingError = false;
    this.loadData();
  }

  private loadData(): void {
    this.restService.getDataPrenames().pipe(take(1))
      .subscribe(data => {
          // TODO: Handle data
          let a = data;
          this.dataLoadingError = false;
          this.isDataLoading = false;
        },(err: HttpErrorResponse) => {
          this.dataLoadingError = true;
          this.isDataLoading = false;
        });
  }

}
