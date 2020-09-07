context('Crear Habito', () => {

    it('makes a wrong login attemp', () => {
        cy.visit('https://habitica.com/static/home')
        cy.get('.login-button').click()
        cy.wait(5000)
  
        cy.get('#usernameInput').type('Takezo316')
        cy.get('#passwordInput').type('TK316Habitica')
  
        cy.get('.btn-info[type="submit"]').click()
        
        //Crear un Nuevo Hábito
        cy.get('.quick-add').first().type('My new Habit').type('{enter}')
  
      })
  });