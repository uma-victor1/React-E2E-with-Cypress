describe('Quote App', () => {
  it('displays a quote when the page loads', () => {
      cy.visit('/');
      cy.get('[data-testid="quote"]').should('be.visible');
  });
const initialQuoteText = "A lovely quote from Eren Yeager"
it('generates a new quote when the button is clicked', () => {
  cy.visit('/');
  cy.get('[data-testid="generate-quote-button"]').click();
  cy.get('[data-testid="quote"]').should('not.have.text', initialQuoteText);
});
});