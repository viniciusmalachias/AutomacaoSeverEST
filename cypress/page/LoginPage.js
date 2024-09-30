class LoginPage {
  visitPage() {
    cy.visit('https://front.serverest.dev/login'); 
  }

  fillValidUsername() {
    cy.get('[data-testid="email"]').type('TesteViniQa5@gmail.com');
  }
  
  fillInvalidUsername() {
    cy.get('[data-testid="email"]').type('TesteViniQa@gmail.co');
  }

  fillValidPassword() {
    cy.get('input[name="password"]').type('Brasil70@');
  }

  fillInvalidPassword() {
    cy.get('input[name="password"]').type('Brasil70');
  }

  fillRegistrationFields() {
    cy.get('[data-testid="nome"]').type('ViniQA5')
    cy.get('[data-testid="email"]').type('TesteViniQa5@gmail.com')
    cy.get('[data-testid="password"]').type('Brasil70@')
  }

  clickBtnEntrar() {
    cy.get('[data-testid="entrar"]').click();
  }

  clickBtnCadastreSe() {
    cy.get('[data-testid="cadastrar"]').click();
  }

  clickBtnCadastrar() {
    cy.get('[data-testid="cadastrar"]').click();
  }

  alertInvalidCredentials() {
    cy.get('.alert').should('be.visible');
  }

  alertEmptyFields() {
    cy.get('.form > :nth-child(3)').should('be.visible');
    cy.get('.form > :nth-child(4)').should('be.visible');
  }

  alertRegristrationSuccess() {
    cy.get('.alert').contains('cadastro realizado com sucesso').should('be.visible');
  }

  homeScreenAssertion() {
    cy.url().should('include', '/home');
  }
}

export default new LoginPage();
