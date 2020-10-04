import {Component, OnInit} from '@angular/core';
import { NamesRestHttpService } from '../service/names-rest.service';
import {Observable} from "rxjs";
import {PrenameRanking} from "../model/prename-ranking";

@Component({
  selector: 'app-rest-call',
  templateUrl: './rest-call.component.html',
  styleUrls: ['./rest-call.component.scss'],
})
export class RestCallComponent implements OnInit {
  public sortedPrenames$: Observable<PrenameRanking[]>;

  constructor(public restService: NamesRestHttpService) {}

  ngOnInit(): void {
    this.sortedPrenames$ = this.restService.getDataPrenamesSorted();
  }
}
