import { AngithubPage } from './app.po';

describe('angithub App', () => {
  let page: AngithubPage;

  beforeEach(() => {
    page = new AngithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
