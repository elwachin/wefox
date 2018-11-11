
class CreateAccountPage {

  get email() { return browser.element('input#txtEmail'); }
  
  get password() { return browser.element('input#txtPassword'); }
  
  get confirmPassword() { return browser.element('input#txtConfirmPassword'); }
  
  get registrationSuccess() { return browser.element('h2#swal2-title'); }

  get acceptButton() { return browser.element('button[class="swal2-confirm swal2-styled"]'); }

  get terms1() { return browser.element('input#terms1'); }
  
  get terms2() { return browser.element('input#terms2'); }

  get terms3() { return browser.element('input#terms3'); }

  get terms4() { return browser.element('input#terms4'); }

  get registerButton() { return browser.element('button#btnRegister'); }
}
export default new CreateAccountPage();
