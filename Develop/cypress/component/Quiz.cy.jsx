import Quiz from '../../client/src/components/Quiz'

describe('Quiz Component Tests', () => {
  it('shows the start button when the component loads', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
    cy.get('button').contains('Start Quiz')
  })
  
})