describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('test1', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://magento.softwaretestingboard.com/');

    cy.get('#search').type('shorts{enter}');

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(12) > .product-item-info > .details > .name > .product-item-link').debug();

    cy.get(':nth-child(12) > .product-item-info > .details > .name > .product-item-link').should('be.visible');
    /* ==== End Cypress Studio ==== */
    cy.get(':nth-child(12) > .product-item-info > .details > .name > .product-item-link').scrollIntoView()
  });
})