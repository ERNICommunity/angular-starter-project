import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestCallComponent } from './rest-call.component';

describe('RestCallComponent', () => {
  let component: RestCallComponent;
  let fixture: ComponentFixture<RestCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
