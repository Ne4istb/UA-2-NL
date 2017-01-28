import { Ua2NlPage } from './app.po';

describe('ua2-nl App', function() {
  let page: Ua2NlPage;

  beforeEach(() => {
    page = new Ua2NlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
