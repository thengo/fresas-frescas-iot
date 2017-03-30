import { FresasFrescasIotPage } from './app.po';

describe('fresas-frescas-iot App', function() {
  let page: FresasFrescasIotPage;

  beforeEach(() => {
    page = new FresasFrescasIotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
