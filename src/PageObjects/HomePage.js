
class HomePage {

  get dashboard() { return browser.element('div.wf-c-consultation-card__content'); }

  get contracts() { return browser.element('a[icon=contracts]'); }

  get personalData() { return browser.element('a[icon=profile]')}
  
  iAmOnHomePage() {
    return this.dashboard.waitForVisible();
  }
}
export default new HomePage();
