import { AppPage } from './app.po';
import { browser } from 'protractor';

fdescribe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('james');
  });

  it('should display Loading component', () => {
    page.navigateTo();
    expect(page.checkExistenceOfLoading().count()).toEqual(1);
  });

  it('should display table first row name', () => {
    page.navigateTo();
    expect(page.getFirstRowTableData()).toEqual('rohit');
  });

  it('should display table row data of "app-user"', () => {
    page.navigateTo();
    expect(page.getAllTableData()).toEqual(['ankur', '25', 'bill']);
  });

  fit('should display updated input value "app-user"', () => {
    page.navigateTo();
    page.scrollDownToEnd();
    browser.sleep(2000);
    page.clickOnTableRow();
    browser.sleep(2000);
    page.clearInput();
    page.inputTerm('james');
    browser.sleep(2000);
    page.clickOnUpdateBtn();
    expect(page.getTableRowText()).toEqual('james');
  });
});
