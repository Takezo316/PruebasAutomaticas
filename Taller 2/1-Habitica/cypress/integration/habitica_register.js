context('Usuario ya existe', () => {

  it('makes a wrong login attemp', () => {
      cy.visit('https://habitica.com/static/home')

      cy.get('#usernameInput').type('Takezo316');
      cy.contains("Este nombre de usuario ya está en uso").should('be.visible')
      cy.get('input[type=email]').type('takezo316@gmail.com')
      cy.get('input[type=password]').first().type('TK316Habitica')
      cy.get('input[type=password]').last().type('TK316Habitica')

      cy.get('.btn-info[type="submit"]').should('have.attr', 'disabled')

    })
});
