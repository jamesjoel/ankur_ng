import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  checkExistenceOfLoading() {
    return element.all(by.css('app-loading'));
    // return element(by.css('app-root app-loading'));
  }

  getFirstRowTableData() {
    return element(by.css('app-root .table tbody tr:nth-child(1) td:nth-child(1)')).getText();
    // return element(by.css('app-root app-loading'));
  }

  getAllTableData() {
    return element.all(by.css('app-user table:nth-child(1) tbody tr:nth-child(1) td')).getText();
  }

  clickOnTableRow() {
    return element(by.css('app-user .show-info tbody tr:nth-child(2) td')).click();
  }
  getTableRowText() {
    return element(by.css('app-user .show-info tbody tr:nth-child(2) td')).getText();
  }

  inputTerm(searchTerm: string) {
    const input = element.all(by.css('.enter-text'));
    return input.sendKeys(searchTerm);
  }

  clearInput() {
    const input = element.all(by.css('.enter-text'));
    return input.clear();
  }

  clickOnUpdateBtn() {
    return element.all(by.css('.update-table')).click();
  }

  scrollDownToEnd() {
    const el = element(by.css('app-user'));
    return browser.executeScript('arguments[0].scrollIntoView()', el.getWebElement());
  }
}
