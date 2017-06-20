import { Doitmaterial3Page } from './app.po';

describe('doitmaterial3 App', () => {
  let page: Doitmaterial3Page;

  beforeEach(() => {
    page = new Doitmaterial3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
