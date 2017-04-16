import { ArtAlumPage } from './app.po';

describe('art-alum App', () => {
  let page: ArtAlumPage;

  beforeEach(() => {
    page = new ArtAlumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
