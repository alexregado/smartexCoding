import { EatnowPage } from './app.po';

describe('eatnow App', () => {
  let page: EatnowPage;

  beforeEach(() => {
    page = new EatnowPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
