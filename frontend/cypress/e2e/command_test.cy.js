describe('Quote App', () => {
const initialQuoteText = "A lovely quote from Eren Yeager"
it('generates a new quote when the button is clicked', () => {
  cy.visit('/');
  cy.generateQuote();
  cy.get('[data-testid="quote"]').should('not.have.text', initialQuoteText);
});
});