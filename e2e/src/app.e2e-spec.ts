import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the welcome page title', () => {
    page.navigateToMainPage();
    expect(page.getWelcomePageTitleText()).toEqual('ERNI Angular Starter Project');
  });

  it('should load the rest call page when clicking the link', () => {
    page.navigateToMainPage();
    page.navigateToRestCallPage();
    expect(page.getRestCallPageTitleText()).toEqual('REST Example');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry),
    );
  });
});
