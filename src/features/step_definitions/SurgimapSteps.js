import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import companyPage from '../../PageObjects/CompanyPage';
import loginPage from '../../PageObjects/LoginPage';
import createAccountpage from '../../PageObjects/CreateAccountPage';
import utils from '../../utils/utils';

const baseURL = 'https://www.surgimap.com/';

Given(/^I navigate to company page$/, () => {
  browser.windowHandleFullscreen();
  companyPage.open(baseURL);
  assert.isTrue(companyPage.iAmOnCompanyPage(), 'not in company page');
  assert.equal(companyPage.pagetitle, 'Surgimap.com: Official Site for Surgimap', 'no page title');
});

When(/^I click on login$/, () => {
  companyPage.loginButton.click();
});

When(/^I see login page$/, () => {
  assert.isTrue(loginPage.iAmOnLoginPage(), 'Not in login page');
});

When(/^I click on create account$/, () => {
  loginPage.createAccountButton.click();
});

When(/^I see create account page$/, () => {
  assert.isTrue(createAccountpage.email.waitForVisible(), 'Not in create account page');
});

When(/^I create the account$/, () => {
  const random = utils.getRandomInt(999);
  createAccountpage.email.setValue(`alan${random}@gmail.com`);
  createAccountpage.password.setValue('Surgimap123');
  createAccountpage.confirmPassword.setValue('Surgimap123');
  createAccountpage.terms1.click();
  createAccountpage.terms2.click();
  createAccountpage.terms3.click();
  createAccountpage.terms4.click();
  createAccountpage.registerButton.click();
});

Then(/^I check the activation email appeared in the mailbox$/, () => {
  createAccountpage.registrationSuccess.waitForVisible();
  createAccountpage.acceptButton.click();
  /**
   * Here I should also check in the mailbox that the email is received but I am not able to use
   * any fake mailbox neither address so it is complicated to build automation on requirements.
   */
});

