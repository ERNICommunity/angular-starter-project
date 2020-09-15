import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor(translate: TranslateService) {
    // This language will be used as fallback in case a translation could not be found in the currently selected
    // language
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {}
}
