import assertions from "../../support/Assertions";
import productPageObjects from "./ProductPageObjects";

class ProductPageFunctions {
    addToCart() {
        cy.waitForElementToBeLoaded(productPageObjects.addToCartButton)
        cy.wait(2000);
        cy.get(productPageObjects.addToCartButton).click()
        cy.waitTillVisible(productPageObjects.addToCartButton)
    }

    changeQuantityTo(qty) {
        cy.get(productPageObjects.quantity).clear()
        cy.typeText(productPageObjects.quantity,qty)
    }

    clickOnCartCounter() {
        cy.get(productPageObjects.cartCounter).click()
    }

    clickOnProceedToCheckoutButton() {
        cy.waitTillVisible(productPageObjects.proceedToCheckoutButton)
        cy.get(productPageObjects.proceedToCheckoutButton).click()
    }

    scrollTillSuccessMessage() {
        cy.waitTillVisible(productPageObjects.successMessage)
        cy.scrollTillVisible(productPageObjects.successMessage,'up')
    }

    validateProductName() {
        assertions.expectTextToMatch(productPageObjects.productTitle,'Affirm Water Bottle ')
    }

    validateSuccessMessage() {
        assertions.expectTextToMatch(productPageObjects.successMessage, '\nYou added Affirm Water Bottle  to your shopping cart.')
    }


}
export default new ProductPageFunctions();