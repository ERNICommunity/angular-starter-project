import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToMainPage(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  navigateToRestCallPage(): Promise<void> {
    return element(by.css('#linkToRestCallPage')).click() as Promise<void>;
  }

  getWelcomePageTitleText(): Promise<string> {
    return element(by.css('#welcomePageTitle')).getText() as Promise<string>;
  }

  getRestCallPageTitleText(): Promise<string> {
    return element(by.css('#restCallPageTitle')).getText() as Promise<string>;
  }
}
