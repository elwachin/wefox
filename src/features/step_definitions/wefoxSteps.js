import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import companyPage from '../../PageObjects/CompanyPage';
import homePage from '../../PageObjects/HomePage';
import contractsPage from '../../PageObjects/ContractsPage';
import utils from '../../utils/utils';

const baseURL = '​https://my.wefox.de/login​';

Given(/^I navigate to company page$/, () => {
  browser.windowHandleFullscreen();
  companyPage.open(baseURL);
  assert.isTrue(companyPage.iAmOnCompanyPage(), 'not in company page');
  
});
 

When(/^I login$/, () => {
  
  browser.waitUntil(() => {
    let el = browser.element('div.wf-c-loading');
    console.log(el);
    return !(el.isVisible());
  }, 10000);
  companyPage.email.waitForExist(5000);
  companyPage.email.click();
  companyPage.email2.setValue('aqawefox+techtest@wefoxgroup.co');
  companyPage.password.setValue('qwertyasdf');
  companyPage.loginButton.click();
});

When(/^I am on homepage$/, () => {
  assert.isTrue(homePage.iAmOnHomePage(), "not in homepage");
});

When(/^I navigate contracts page$/, () => {
  homePage.contracts.click();
  contractsPage.noContracts.waitForVisible();
  assert.isTrue(contractsPage.noContracts.getText().includes('no contracts yet'), 'element not found');
});
 
When(/^I navigate to personal data$/, () => {
  homePage.personalData.click();

});

Then(/^I logout$/, () => {
  homePage.logout.click();
  assert.isTrue(companyPage.logo.waitForVisible(), 'it didnt logout');
});

 