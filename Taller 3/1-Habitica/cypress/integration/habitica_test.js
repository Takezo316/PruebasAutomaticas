context('Login', () => {

  it('makes a wrong login attemp', () => {
      cy.visit('https://habitica.com/static/home')
      cy.get('.login-button').click()
      cy.wait(5000)

      cy.get('#usernameInput').type('Takezo316')
      cy.get('#passwordInput').type('TK316Habitica')

      cy.get('.btn-info[type="submit"]').click()

    })
});