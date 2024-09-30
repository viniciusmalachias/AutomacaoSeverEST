const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que eu envio uma requisição para a API de listagem de usuários', () => {
  cy.request('GET', 'https://serverest.dev/usuarios').as('usuariosResponse');
});

When('a resposta de usuários for recebida', () => {
  cy.get('@usuariosResponse').then((response) => {
    expect(response).to.have.property('status', 200);
  });
});

Then('o status code de usuários deve ser 200', () => {
  cy.get('@usuariosResponse').its('status').should('equal', 200);
});

Then('a lista de usuários deve estar presente no corpo da resposta', () => {
  cy.get('@usuariosResponse').its('body.usuarios').should('exist');
});


Given('que eu envio uma requisição para a API de listagem de produtos', () => {
  cy.request('GET', 'https://serverest.dev/produtos').as('produtosResponse');
});

When('a resposta de produtos for recebida', () => {
  cy.get('@produtosResponse').then((response) => {
    expect(response).to.have.property('status', 200); 
  });
});

Then('o status code de produtos deve ser 200', () => {
  cy.get('@produtosResponse').its('status').should('equal', 200);
});

Then('a lista de produtos deve estar presente no corpo da resposta', () => {
  cy.get('@produtosResponse').its('body.produtos').should('exist');
});
