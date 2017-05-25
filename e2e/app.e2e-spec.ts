import { LastProjectPage } from './app.po';

describe('last-project App', () => {
  let page: LastProjectPage;

  beforeEach(() => {
    page = new LastProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
