import { AngularMigrationPage } from './app.po';

describe('angular-migration App', () => {
  let page: AngularMigrationPage;

  beforeEach(() => {
    page = new AngularMigrationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
