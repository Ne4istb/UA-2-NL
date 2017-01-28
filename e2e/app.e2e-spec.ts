import { UA2NLPage } from './app.po';

describe('ua2-nl App', function() {
  let page: UA2NLPage;

  beforeEach(() => {
    page = new UA2NLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
