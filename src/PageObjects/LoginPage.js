
class Loginpage {

  get brand() { return browser.element('div.brand'); }
  
  get createAccountButton() { return browser.element('a#aCreateAccount'); }


  iAmOnLoginPage() {
    return this.brand.waitForVisible();
  }
}
export default new Loginpage();
