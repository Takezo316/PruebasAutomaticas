var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891')
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });

  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn');

   var mailInput = cajaLogIn.element('input[name="correo"]');
   mailInput.click();
   mailInput.keys(email);

   var passwordInput = cajaLogIn.element('input[name="password"]');
   passwordInput.click();
   passwordInput.keys(password)
});

When(/^I fill the register form with (.*) and (.*) and (.*) and (.*) and (.*) and (.*) and (.*)$/ , (firstName, lastName, email, university, master, undergraduate, password) => {
    var cajaSignUp = browser.element('.cajaSignUp');

   var firstNameInput = cajaSignUp.element('input[name="nombre"]');
   firstNameInput.click(); 
   firstNameInput.keys(firstName); 

   var lastNameInput = cajaSignUp.element('input[name="apellido"]');
   lastNameInput.click(); 
   lastNameInput.keys(lastName); 

   var emailInput = cajaSignUp.element('input[name="correo"]');
   emailInput.click(); 
   emailInput.keys(email); 

   var universityInput = cajaSignUp.element('select[name="idUniversidad"]');
   
   cajaSignUp.element('option="Universidad Nacional"').click();
   
   var passwordInput = cajaSignUp.element('input[name="password"]');
   passwordInput.click(); 
   passwordInput.keys(password); 
 
}); 

   Then('I expect to see {string}', 
    error => {
        browser.waitForVisible('.aviso.alert.alert-danger', 5000);
        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).to.include(error);
    }
   );

   Then('I expect to see the cuenta menu', 
    () => {
        browser.waitForVisible('#cuenta', 5000);
    }
   );
});