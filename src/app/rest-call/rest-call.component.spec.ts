import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestCallComponent } from './rest-call.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { PrenameRanking } from '../model/prename-ranking';
import { By } from '@angular/platform-browser';
import { NamesRestHttpService } from '../service/names-rest.service';

describe('RestCallComponent', () => {
  let component: RestCallComponent;
  let fixture: ComponentFixture<RestCallComponent>;
  let namesRestHttpServiceMock: jasmine.SpyObj<NamesRestHttpService>;

  beforeEach(async () => {
    namesRestHttpServiceMock = jasmine.createSpyObj('NamesRestHttpService', ['getDataPrenamesSorted']);
    await TestBed.configureTestingModule({
      declarations: [RestCallComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [{ provide: NamesRestHttpService, useValue: namesRestHttpServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show the title', () => {
    expect(fixture.debugElement.query(By.css('#pageTitle')).nativeElement.textContent).toContain('REST_CALL');
  });

  it('should correctly display the list of prenames', () => {
    // Check no table but loading spinner
    namesRestHttpServiceMock.prenamesLoading = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#loadingSpinner'))).toBeTruthy();
    // Check that the loaded results are shown
    component.sortedPrenames$ = getPrenamesObersvableMock();
    namesRestHttpServiceMock.prenamesLoading = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#resultTable')).nativeElement.childElementCount).toEqual(3);
  });

  it('should correctly show the loading error message', () => {
    namesRestHttpServiceMock.prenamesLoading = false;
    namesRestHttpServiceMock.prenameLoadingError = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#loadingError'))).toBeTruthy();
  });

  function getPrenamesObersvableMock(): Observable<PrenameRanking[]> {
    return of([
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
        plz: '7432',
        vorname: 'Barbara',
        anzahl: 14,
        geschlecht: 'w',
        rang: 1,
        ortbez18: 'Zillis',
      },
    ] as PrenameRanking[]);
  }
});
