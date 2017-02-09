import { HelloARPage } from './app.po';

describe('hello-ar App', function() {
  let page: HelloARPage;

  beforeEach(() => {
    page = new HelloARPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
