import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  changeLanguage(language: string): void {
    this.translate.use(language);
  }
}
