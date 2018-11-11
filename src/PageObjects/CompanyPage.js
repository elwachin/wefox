
class CompanyPage {

  get mainNav() { return browser.element('div.main_nav'); }
  
  get pagetitle() { return browser.getTitle(); }
  
  get loginButton() { return browser.element('a.btn-login'); }

  open(url) {
    browser.url(url);
  }

  iAmOnCompanyPage() {
    return this.mainNav.waitForVisible();
  }
}
export default new CompanyPage();
