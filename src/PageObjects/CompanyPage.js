
class CompanyPage {

  get logo() { return browser.element('a.fusion-logo-link'); }
  
  get mainNav() { return browser.element('h1.wf-u-mb-12'); }
  
  get email() { return browser.element("//input[@id = 'username']/../label"); }

  get email2() { return browser.element('#username'); }

  get password() { return browser.element('#password'); }

  get loginButton() { return browser.element('button[type=submit]'); }

  open(url) {
    browser.url(url);
  }

  iAmOnCompanyPage() {
    return this.mainNav.waitForVisible();
  }
}
export default new CompanyPage();
