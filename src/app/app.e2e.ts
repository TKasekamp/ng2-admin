import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'ng2-admin - Angular 2 Admin Template';
    expect(subject).toEqual(result);
  });

  it('should have <pages>', () => {
    let subject = element(by.css('pages')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have Dashboard title', () => {
    let subject = element(by.css('h1')).getText();
    let result  = 'DASHBOARD';
    expect(subject).toEqual(result);
  });

});
