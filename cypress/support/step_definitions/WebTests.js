const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const loginPage = require('../../page/LoginPage');

Given('que estou na página de login', () => {
  loginPage.visitPage();
});

When('eu insiro um nome de usuário e senha válidos', () => {
  loginPage.fillValidUsername();
  loginPage.fillValidPassword();
});

When('eu insiro um nome de usuário e senha inválidos', () => {
  loginPage.fillInvalidUsername();
  loginPage.fillInvalidPassword();
});

When('clico no botão de login', () => {
  loginPage.clickBtnEntrar();
});

When('clico no botão Cadastre-se', () => {
  loginPage.clickBtnCadastreSe();
});

When('preencho os campos obrigatórios de Cadastro', () => {
  loginPage.fillRegistrationFields();
});

When('clico no botão Cadastrar', () => {
  loginPage.clickBtnCadastrar();
});

Then('visualizo a mensagem de confirmação que meu cadastro foi realizado', () => {
  loginPage.homeScreenAssertion();
 });

Then('devo ser redirecionado para a Home', () => {
 loginPage.homeScreenAssertion();
});

Then('devo ver uma mensagem de erro sobre credenciais inválidas', () => {
  loginPage.alertInvalidCredentials();
});

Then('devo ver mensagens de erro indicando os campos obrigatórios', () => {
  loginPage.alertEmptyFields();
});
