describe('Quiz Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('shows the start button when the component loads', () => {
        cy.get('button').contains('Start Quiz')
    })
    it('should start the quiz and show the first question', () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get ('.card').should('be.visible')
        cy.get('h2').should('not.be.empty')
    })
  });