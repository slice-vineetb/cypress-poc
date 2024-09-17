class Assertions {
    expectElementToBeVisible(selector) {
        cy.get(selector).should('be.visible');
    }

    expectElementNotToBeVisible(selector) {
        cy.get(selector).should('not.be.visible');
    }

    expectElementToBeEnabled(selector) {
        cy.get(selector).should('be.enabled');
    }

    expectElementNotToBeEnabled(selector) {
        cy.get(selector).should('be.disabled');
    }

    expectTextToMatch(selector, expectedText) {
        cy.get(selector).should('have.text', expectedText);
    }

    expectTextNotToMatch(selector, expectedText) {
        cy.get(selector).should('not.have.text', expectedText);
    }
}
export default new Assertions();
